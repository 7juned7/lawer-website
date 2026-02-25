import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    // Send lead to client
    await transporter.sendMail({
      from: `"Ezee Legal" <ezeelegal05@gmail.com>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: "New Enquiry – Ezee Legal",
      html: `
        <h3>New enquiry received via website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <p><small>Source: ezeelegal.in contact form</small></p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Brevo Email Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Email sending failed",
      }),
      { status: 500 }
    );
  }
}