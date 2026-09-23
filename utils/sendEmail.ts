// utils/sendEmail.ts

import nodemailer from 'nodemailer';
import {
  getOTPEmailTemplate,
  getWelcomeEmailTemplate,
  getContactUserConfirmationTemplate,
  getContactAdminNotificationTemplate,
} from './emailTemplates';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendMail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

// Existing functions
export async function sendPasswordResetOTP(to: string, otp: string, name?: string): Promise<boolean> {
  const html = getOTPEmailTemplate(otp, name);
  return sendMail(to, 'GigThink - Password Reset OTP', html);
}

export async function sendWelcomeEmail(to: string, name: string): Promise<boolean> {
  const html = getWelcomeEmailTemplate(name);
  return sendMail(to, 'Welcome to GigThink!', html);
}

// Contact functions (corrected)
export async function sendContactUserConfirmation(
  to: string,
  name: string,
  inquiryType: string,
  message: string
): Promise<boolean> {
  // Use the template function to get HTML string
  const html = getContactUserConfirmationTemplate(name, inquiryType, message);
  return sendMail(to, 'We received your message - GigThink', html);
}

export async function sendContactAdminNotification(
  name: string,
  email: string,
  company: string,
  inquiryType: string,
  message: string
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_FROM;
  if (!adminEmail) {
    console.error('Admin email not configured');
    return false;
  }
  // Use the template function to get HTML string
  const html = getContactAdminNotificationTemplate(name, email, company, inquiryType, message);
  return sendMail(adminEmail, `New Contact Inquiry: ${inquiryType} from ${name}`, html);
}