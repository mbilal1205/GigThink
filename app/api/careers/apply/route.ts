// app/api/careers/apply/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const cvFile = formData.get("cv") as File | null;

    if (!name || !email || !cvFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Prepare transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Convert file to buffer
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Email to admin (GigThink)
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: "gigthinkofficial@gmail.com",
      subject: `New Job Application: ${jobTitle} from ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    };

    // Email to applicant (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Application Received - GigThink",
      html: `
        <h2>Application Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for applying for the <strong>${jobTitle}</strong> position at GigThink.</p>
        <p>Our team will review your application and get back to you if there's a good fit.</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}