import { json } from '@sveltejs/kit';
import { sendEmail } from '$lib/email';

export async function POST({ request }) {
  const { email } = await request.json();
  
  const result = await sendEmail({
    to: 'kumar.satvik@pirata.design',
    subject: 'New Contact Form Submission',
    text: `Email: ${email}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Email:</strong> ${email}</p>
    `
  });
  
  if (result.success) {
    return json({ message: 'Email sent successfully' });
  } else {
    return json({ error: result.error }, { status: 500 });
  }
}