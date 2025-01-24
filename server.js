const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address from .env
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password from .env
  },
});

// POST /hire-me route with validation
app.post('/hire-me', (req, res) => {
  const { companyName, jobTitle, interviewDate, email, message } = req.body;

  // Validation
  if (!companyName || !jobTitle || !interviewDate || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL, // Sender's email
    to: 'msadham0708@gmail.com', // Receiver's email
    subject: 'New Hire Me Request',
    text: `
      Company Name: ${companyName}
      Job Title: ${jobTitle}
      Interview Date: ${interviewDate}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Form submitted successfully' });
  });
});

// POST /contact route with validation
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL, // Sender's email
    to: 'msadham0708@gmail.com', 
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Form submitted successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
