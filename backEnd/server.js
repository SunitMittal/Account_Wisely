const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const RESPONSES_FILE = path.join(__dirname, "responses.jsonl");

// Email is optional — only set up if SMTP details are provided. Leave these blank in .env if you rather just check the Google Sheet.
const emailEnabled = Boolean(process.env.SMTP_HOST && process.env.OWNER_EMAIL);
const transporter = emailEnabled
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

function formatEmailBody(data) {
  return `
New survey response

Accounting setup: ${(data.accountingSetup || []).join(", ")}
Help needed: ${(data.helpNeeded || []).join(", ")}
Monthly sales: ${(data.monthlySales || []).join(", ")}
Location: ${data.location || ""}
Name: ${data.firstName || ""}
Email: ${data.email || ""}
Phone: ${data.phone || ""}
Submitted: ${new Date().toLocaleString()}
`.trim();
}

app.post("/api/survey", async (req, res) => {
  const data = req.body;

  try {
    // Save first — this is the permanent backup record. Nothing is lost even if the Sheet or email steps below fail.
    fs.appendFileSync(
      RESPONSES_FILE,
      JSON.stringify({ ...data, submittedAt: new Date().toISOString() }) + "\n",
    );
  } catch (err) {
    console.error("Failed to save response to disk:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Could not save response" });
  }

  res.json({ status: 'success' })

  // Push the same data into the Google Sheet, if configured.
  if (process.env.SHEET_WEBHOOK_URL) {
    fetch(process.env.SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      })
      .catch((err) => {
      console.error('Response was saved, but writing to the Sheet failed:', err)
    })
    }

  // Optional email notification, only runs if SMTP is configured.
  if (emailEnabled) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.OWNER_EMAIL,
        subject: "New Account Wisely survey response",
        text: formatEmailBody(data),
      });
    } catch (err) {
      console.error("Response was saved, but email notification failed:", err);
    }
  }

  res.json({ status: "success" });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
