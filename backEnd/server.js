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
  const { senderEmail, subject, msg } = req.body;

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
    return res.status(200).send({ msg: "Email sent successfully!", info });
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
