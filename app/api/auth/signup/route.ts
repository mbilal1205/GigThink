import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendWelcomeEmail } from '@/utils/sendEmail'; // <-- import our custom email function

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const ALLOWED_PROVIDERS = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
  'proton.me',
  'protonmail.com',
  'live.com',
  'aol.com'
];

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'All fields are required. Please complete the form to proceed.' },
        { status: 400 }
      );
    }

    const emailDomain = email.split('@')[1].toLowerCase();
    if (!ALLOWED_PROVIDERS.includes(emailDomain)) {
      return NextResponse.json(
        { error: 'Registration is restricted to secure, trusted email domain providers (e.g., Gmail, Outlook, Yahoo, iCloud, Proton). Temporary or unverified email domains are strictly prohibited.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || 'An error occurred during registration. Please try again.' },
        { status: 400 }
      );
    }

    // Duplicate email check
    if (data?.user && data.user.identities && data.user.identities.length === 0) {
      return NextResponse.json(
        { error: 'An account with this email address already exists. Please log in to continue.' },
        { status: 409 }
      );
    }

    // ===== Send Custom Welcome Email =====
    if (data?.user) {
      try {
        await sendWelcomeEmail(data.user.email!, data.user.user_metadata?.name || name);
        console.log('Welcome email sent to', data.user.email);
      } catch (emailError) {
        // Email failure should not block signup; just log
        console.error('Welcome email failed:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Account registered successfully. A verification link has been dispatched to your email address. Please verify your account to proceed (remember to review your Spam or Junk folder).',
      user: data.user
    }, { status: 201 });

  } catch (err) {
    console.error("Signup Error: ", err);
    return NextResponse.json(
      { error: 'An unexpected internal server error occurred. Please try again later or contact support if the issue persists.' },
      { status: 500 }
    );
  }
}