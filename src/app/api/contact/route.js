import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // FROM (must be MailerSend verified / test domain)
    const sentFrom = new Sender(
      process.env.CONTACT_FROM_EMAIL,
      "N3&M Imperium Chambers"
    );

    // TO (your inbox)
    const recipients = [
      new Recipient(
        process.env.CONTACT_TO_EMAIL,
        "N3&M Imperium Chambers"
      ),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("New Website Inquiry – N3&M Imperium Chambers")
      .setReplyTo(email, name) // reply goes to user
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
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}