export function getOTPEmailTemplate(otp: string, name?: string): string {
  const displayName = name ? ` ${name},` : '';
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset OTP</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; margin: auto; background-color:#ffffff; border-radius:12px; margin-top:40px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <!-- Header -->
      <tr>
        <td align="center" style="padding:40px 30px 20px;">
          <img src="https://yourdomain.com/giglogo.png" alt="GigThink" width="64" style="display:block; margin:0 auto;" />
          <h1 style="font-size:24px; color:#1a1a1a; margin:20px 0 0;">Password Reset OTP</h1>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:10px 30px 30px;">
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Hi${displayName}
          </p>
          <p style="font-size:16px; color:#333; line-height:1.5;">
            You requested to reset your password for your GigThink account. Use the OTP below to proceed:
          </p>
          <!-- OTP Box -->
          <div style="text-align:center; margin:30px 0;">
            <span style="display:inline-block; background:#f0f0f0; padding:15px 30px; border-radius:8px; font-size:32px; letter-spacing:10px; font-weight:bold; color:#000; border:1px dashed #ccc;">${otp}</span>
          </div>
          <p style="font-size:14px; color:#666; line-height:1.5;">
            This OTP is valid for <strong>10 minutes</strong>. If you didn't request this, please ignore this email.
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin:30px 0;" />
          <p style="font-size:12px; color:#999; text-align:center;">
            Need help? Contact our support team.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

export function getWelcomeEmailTemplate(name: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to GigThink</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; margin: auto; background-color:#ffffff; border-radius:12px; margin-top:40px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <tr>
        <td align="center" style="padding:40px 30px 20px;">
          <img src="https://yourdomain.com/giglogo.png" alt="GigThink" width="64" style="display:block; margin:0 auto;" />
          <h1 style="font-size:24px; color:#1a1a1a; margin:20px 0 0;">Welcome to GigThink! 🎉</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 30px 30px;">
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Hi ${name},
          </p>
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Thank you for joining GigThink! We're excited to have you on board.
          </p>
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Please verify your email address to activate your account. Check your inbox (and spam folder) for the verification email from Supabase.
          </p>
          <p style="font-size:16px; color:#333; line-height:1.5;">
            If you have any questions, feel free to reach out to our support team.
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin:30px 0;" />
          <p style="font-size:12px; color:#999; text-align:center;">
            © 2024 GigThink. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}


// utils/emailTemplates.ts (add these functions at the end)

export function getContactUserConfirmationTemplate(name: string, inquiryType: string, message: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We received your message</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; margin: auto; background-color:#ffffff; border-radius:12px; margin-top:40px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <tr>
        <td align="center" style="padding:40px 30px 20px;">
          <img src="https://yourdomain.com/giglogo.png" alt="GigThink" width="64" style="display:block; margin:0 auto;" />
          <h1 style="font-size:24px; color:#1a1a1a; margin:20px 0 0;">Message Received!</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 30px 30px;">
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Hi ${name},
          </p>
          <p style="font-size:16px; color:#333; line-height:1.5;">
            Thank you for reaching out to GigThink. We have received your inquiry and our team will review it shortly.
          </p>
          <div style="background:#f9f9f9; border-left:4px solid #0091ff; padding:15px; margin:20px 0; border-radius:4px;">
            <p style="margin:0; font-size:14px; color:#555;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <p style="margin:10px 0 0; font-size:14px; color:#555;"><strong>Message:</strong><br/>${message}</p>
          </div>
          <p style="font-size:14px; color:#666; line-height:1.5;">
            We typically respond within 1-2 business days. If your matter is urgent, please indicate that in your message.
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin:30px 0;" />
          <p style="font-size:12px; color:#999; text-align:center;">
            © 2024 GigThink. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

export function getContactAdminNotificationTemplate(name: string, email: string, company: string, inquiryType: string, message: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Inquiry</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; margin: auto; background-color:#ffffff; border-radius:12px; margin-top:40px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <tr>
        <td align="center" style="padding:40px 30px 20px;">
          <img src="https://yourdomain.com/giglogo.png" alt="GigThink" width="64" style="display:block; margin:0 auto;" />
          <h1 style="font-size:24px; color:#1a1a1a; margin:20px 0 0;">New Contact Inquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 30px 30px;">
          <p style="font-size:16px; color:#333; line-height:1.5;">
            You have received a new inquiry from the GigThink contact form.
          </p>
          <table style="width:100%; margin:20px 0; border-collapse:collapse;">
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#f9f9f9;">Name</td>
              <td style="padding:8px; border:1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#f9f9f9;">Email</td>
              <td style="padding:8px; border:1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#f9f9f9;">Company/Agency</td>
              <td style="padding:8px; border:1px solid #ddd;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#f9f9f9;">Inquiry Type</td>
              <td style="padding:8px; border:1px solid #ddd;">${inquiryType}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#f9f9f9;">Message</td>
              <td style="padding:8px; border:1px solid #ddd;">${message}</td>
            </tr>
          </table>
          <p style="font-size:14px; color:#666; line-height:1.5;">
            Please respond to this inquiry at your earliest convenience.
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin:30px 0;" />
          <p style="font-size:12px; color:#999; text-align:center;">
            © 2024 GigThink. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}