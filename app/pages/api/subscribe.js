import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Basic validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      // Setup nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Example SMTP setup (replace with your own)
        service: "gmail",
        auth: {
          user: "your-email@gmail.com",
          pass: "your-password",
        },
      });

      // Prepare email options
      const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Subscription Confirmation",
        text: "Thank you for subscribing to our newsletter!",
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Respond with success message
      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to subscribe. Please try again later." });
    }
  }

  // Handle unsupported methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
