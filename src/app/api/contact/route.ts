// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.TO_EMAIL;

// Instantiate inside the handler (not at module top-level)
export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey); // now safe — only created if key exists

    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!TO_EMAIL) {
      console.error("Missing TO_EMAIL");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
