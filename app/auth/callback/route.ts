import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { sendWelcomeEmail } from '@/utils/sendEmail'; // <-- add import

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';
  const source = searchParams.get('source'); // get source param

  if (code) {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // ignored
            }
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // 🔥 If source is signup, send welcome email
      if (source === 'signup') {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user?.email) {
            const name = user.user_metadata?.full_name || user.user_metadata?.name || 'User';
            await sendWelcomeEmail(user.email, name);
            console.log('Welcome email sent to Google OAuth user:', user.email);
          }
        } catch (emailError) {
          console.error('Welcome email failed for Google OAuth:', emailError);
        }
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/login?error=AuthCodeError`);
}