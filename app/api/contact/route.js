import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("===== Contact API called =====");

  try {
    const body = await req.json();
    console.log("✅ Form data received:", body);

    const { name, email, message } = body;

    // Validate basic fields
    if (!name || !email || !message) {
      console.warn("⚠️ Missing required fields");
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
    }

    // Create transporter with detailed logging
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true, // will log SMTP communication
    });

    console.log("✅ Transporter created, attempting to send email...");

    const info = await transporter.sendMail({
      from: `"Stone Driving School" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📨 New Contact Form Message from ${name}`,
      html: `
        <h2>New message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
      replyTo: email, // so replies go directly to user
    });

    console.log("✅ Email sent:", info);
    console.log("===== Contact API finished =====");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Contact API error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
