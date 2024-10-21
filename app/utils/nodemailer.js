// utils/nodemailer.js
import nodemailer from "nodemailer";

// Configure the SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure:  false,
  auth: {
    user: 'ashley.haag@ethereal.email',
    pass: 'KKtRxCf5BghMDnxme8',
  },
});

// Send email function
export async function sendEmail({ to, subject, text, html }) {
  const mailOptions = {
    from: '"Ashley Haag" <ashley.haag@ethereal.email>', // Sender address
    to, // List of recipients
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
  };

  await transporter.sendMail(mailOptions);
}
