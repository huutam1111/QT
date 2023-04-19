
const nodeMailer = require('nodemailer')

const adminEmail = 'quocthanh.ltd@gmail.com'
const adminPassword = 'kqjfckmcibgpqzhx'
const mailHost = 'smtp.gmail.com'
const mailPort = 587
const toEmail = 'quocthanh.ltd@gmail.com'
const sendMail = (subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, 
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail, // địa chỉ admin email bạn dùng để gửi
    to: toEmail, // địa chỉ gửi đến
    subject: subject, // Tiêu đề của mail
    html: htmlContent // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
  }

  // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
  return transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}