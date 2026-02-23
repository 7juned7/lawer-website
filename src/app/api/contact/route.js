import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    // FROM: MailerSend test domain
    const sentFrom = new Sender(
      process.env.CONTACT_FROM_EMAIL,
      "N3&M Imperium Chambers"
    );

    // TO: your test inbox (7juned7)
    const recipients = [
      new Recipient(process.env.CONTACT_TO_EMAIL, "Juned"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Test Inquiry – N3&M Imperium Chambers")
      .setReplyTo(email) // ✅ ONLY email (no name)
      .setText(`
New inquiry received via website:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `);

    await mailerSend.email.send(emailParams);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("MailerSend Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "MailerSend failed",
      }),
      { status: 500 }
    );
  }
}