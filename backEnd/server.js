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
    user: "info@accountwisely.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  var message = {
    from: req.senderEmail,
    to: "info@accountwisely.com",
    subject: req.subject,
    message: req.msg,
    html: `<p>You have received a message from:</p>
            <p><strong>Name:</strong> ${req.firstname} ${req.lastname}</p>
            <p><strong>Email:</strong> ${req.senderEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${req.msg}</p>`,
  }

  await transporter.verify();
  console.log("Server is ready to send emails");
  (async () => {
    try {
      const info = await transporter.sendMail(message);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.status(200).send({ msg: "Email sent successfully!", info });
    } catch (err) {
      console.error("Error while sending mail", err);
      res.status(500).send({ msg: "Error sending email", error: err });
    }
  })();
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
