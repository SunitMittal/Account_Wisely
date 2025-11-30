const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// transporter via Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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
    from: process.env.EMAIL_USER, // Gmail requires using authenticated email as 'from'
    replyTo: senderEmail, // Use replyTo so replies go to the sender
    to: process.env.EMAIL_USER,
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
