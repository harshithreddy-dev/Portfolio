import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!TO_EMAIL) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["harshithreddyi1289@gmail.com"],
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (_error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
