import nodemailer from 'nodemailer';
import { SESClient, SendRawEmailCommand } from '@aws-sdk/client-ses';
import { env } from '$env/dynamic/private';

const transporter = nodemailer.createTransport({
    host: env.AWS_REGION,
    port: env.SMTP_PORT,
    secure: false, // Set secure to false if using port 587
    tls: {
      minVersion: "TLSv1.2", // Specify the minimum TLS version
    },
    auth: {
      user: env.AWS_ACCESS_KEY_ID,
      pass: env.AWS_SECRET_ACCESS_KEY,
    },
  });
  
export async function sendEmail({ to, subject, text, html }) {
  try {
    const result = await transporter.sendMail({
      from: 'website@krsatvik.xyz',
      to,
      subject,
      text,
      html,
    });
    console.log('Email sent:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}