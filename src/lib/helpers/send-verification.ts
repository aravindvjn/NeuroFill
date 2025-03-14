import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "NeuroFill - Verify Your Email",
    text: `Welcome to NeuroFill! Please verify your email within 24 hours by clicking the link below:\n\n${verifyUrl}`,
    html: `<p>Welcome to <b>NeuroFill!</b> Please verify your email within <b>24 hours</b> by clicking the link below:</p>
           <p><a href="${verifyUrl}">Verify Email</a></p>
           <p>If you didn’t request this, please ignore this email.</p>`,
  });
}

export async function sendResetPassword(email: string, token: string, havePassword: boolean) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

  const subject = havePassword
    ? "NeuroFill - Reset Your Password"
    : "NeuroFill - Enable Email & Password Login";

  const text = havePassword
    ? `You requested a password reset. Click the link below to reset your password within 1 hour:\n\n${resetUrl}`
    : `You're enabling email & password login for your account. Click the link below to set a password within 1 hour:\n\n${resetUrl}`;

  const html = havePassword
    ? `<p>You requested a password reset. Click the link below to reset your password within <b>1 hour</b>:</p>
       <p><a href="${resetUrl}">Reset Password</a></p>
       <p>If you didn’t request this, please ignore this email.</p>`
    : `<p>You're enabling email & password login for your account. Click the link below to set a password within <b>1 hour</b>:</p>
       <p><a href="${resetUrl}">Set Password</a></p>
       <p>If you didn’t request this, please ignore this email.</p>`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject,
    text,
    html,
  });
}
