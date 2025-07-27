const user = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');



exports.register = async (req, res) => {
  const { password, email, role, firstName, lastName, mobile_NO, username } = req.body;
  if (!email || !password || !role || !firstName || !lastName || !mobile_NO || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await user.findOne({ email });
    if (userExists) {
      return res.json({ message: "user already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      email,
      password: hashPassword,
      role,
      firstName,
      lastName,
      mobile_NO,
      username
    });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS  // App Password (not your Gmail password)
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: 'Welcome to Campus Connect!',
      html: `
    <h3>Hello ${newUser.firstName} 👋</h3>
    <p>You have successfully registered with Campus Connect.</p>
    <p><strong>Username:</strong> ${newUser.username}</p>
    <p>Enjoy exploring the platform!</p>
  `
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    return res.status(201).json({
      message: "user registered successfully", Userid: newUser._id
    });
  }
  catch (error) {
    console.error("error during registration:", error);
    return res.status(500).json({
      message: "internal server error", error: error.message
    })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });

  }
  try {
    const newuser = await user.findOne({ email });
    if (!newuser) {
      return res.status(404).json({ message: "user not found" });

    }
    const isPasswordValid = await bcrypt.compare(password, newuser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "invalid password"
      });
    }
    const token = jwt.sign(
      {
        userID: newuser._id
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newuser.email,
      subject: 'Login Notification',
      html: `
        <h3>Hello ${newuser.firstName} 👋</h3>
        <p>You have successfully logged in to Campus Connect.</p>
        <p>Enjoy exploring the platform!</p>
      `
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('error sending email:', err);

      }
      else {
        console.log('email send:', info.response);
      }
    })

    return res.status(200).json({
      message: "login successful",
      user: {
        userID: newuser._id,
        email: newuser.email
      }
    });
  }




  catch (error) {
    console.error("error during login:", error);
    return res.status(500).json({
      message: "internal server error in login",
      error: error.message
    });

  }

}

exports.logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.status(200).json({
      message: "logout successful"
    })
  }
  catch (error) {
    console.error("error during logout:", error);
    return res.status(500).json({
      message: "internal server error in logout",
      error: error.message
    });

  }
}


