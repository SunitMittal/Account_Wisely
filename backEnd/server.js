const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// transporter via GoDaddy SMTP
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // GoDaddy's SMTP server
  port: 465, // Secure port
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // GoDaddy email address (e.g., info@accountwisely.com)
    pass: process.env.EMAIL_PASS, // GoDaddy email password
  },
});

app.post("/send-email", async (req, res) => {
  try {
    // Extract data from request body
    const { first_name, last_name, email, phone, message } = req.body;

  if (!senderEmail || !subject || !msg) {
    return res
      .status(400)
      .send({ msg: "senderEmail, subject and msg are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // GoDaddy email address used for sending
    replyTo: senderEmail, // Use replyTo so replies go to the user who submitted the form
    to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Send to recipient email (info@accountwisely.com)
    subject: subject,
    text: `You have received a feedback/query:
            Email: ${senderEmail}
            Message:
            ${msg}
        `,

    html: `
            <p><strong>You have received a feedback/query:</strong></p>
            <p><strong>Email:</strong> ${senderEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${msg}</p>
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ msg: "Error sending email", error });
    }

    // Create email message
    const mailOptions = {
      from: "info@accountwisely.com", // Use your Gmail account as sender
      replyTo: email, // Set reply-to to the sender's email
      to: "info@accountwisely.com",
      subject: `New Contact Form Submission from ${first_name || "User"}`,
      html: `
        <p>You have received a new message from the contact form:</p>
        <p><strong>Name:</strong> ${first_name || ""} ${last_name || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        You have received a new message from the contact form:
        
        Name: ${first_name || ""} ${last_name || ""}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
    };

    // Verify transporter connection
    await transporter.verify();
    console.log("Server is ready to send emails");

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).send({ msg: "Email sent successfully!", info });
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
