const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// transporter via GoDaddy SMTP
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // GoDaddy's SMTP server
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // GoDaddy email address (e.g., info@accountwisely.com)
    pass: process.env.EMAIL_PASS, // GoDaddy email password
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;

    if (!email || !message) {
      return res.status(400).send({ msg: "email and message are required" });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER, // GoDaddy email address used for sending
      replyTo: email, // replies go to the user who submitted the form
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // recipient email (info@accountwisely.com)
      subject: `New Contact Form Submission from ${first_name || "User"}`,
      text: `You have received a new message from the contact form:

Name: ${first_name || ""} ${last_name || ""}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
      html: `
        <p>You have received a new message from the contact form:</p>
        <p><strong>Name:</strong> ${first_name || ""} ${last_name || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    res.status(200).send({ msg: "Email sent successfully!" });
  } catch (err) {
    console.error("Error while sending mail", err);
    res.status(500).send({
      msg: "Error sending email",
      error: err.message || err,
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
