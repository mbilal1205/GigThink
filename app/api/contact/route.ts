// app/api/contact/route.ts

import { NextResponse, after } from 'next/server';
import { sendContactUserConfirmation, sendContactAdminNotification } from '@/utils/sendEmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, inquiryType, message } = body;

    // Basic validation
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // 🟢 Fire background email sending after response is sent
    after(() => {
      // Send confirmation to user
      sendContactUserConfirmation(email, name, inquiryType, message)
        .catch((err) => console.error('User email failed:', err));

      // Send notification to admin
      sendContactAdminNotification(name, email, company || '', inquiryType, message)
        .catch((err) => console.error('Admin email failed:', err));
    });

    // Return success immediately, without waiting for emails
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form validation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}