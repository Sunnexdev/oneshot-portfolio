import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sunnexsnare@19gmail.com', // <-- Replace with your real personal email
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 },
    );
  }
}
