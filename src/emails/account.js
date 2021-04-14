const sgMail = require("@sendgrid/mail")


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: "ricardo.martins.1998@hotmail.com",
    from: "ricardo.martins.1998@hotmail.com",
    subject: "Test",
    text: "Teste"
})

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ricardo.martins.1998@hotmail.com",
    subject: "Welcome!",
    text: `Welcome to the Task Manager App, ${name}. Feel free to get in touch and give feedback!`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ricardo.martins.1998@hotmail.com",
    subject: "What happened?",
    text: `Hey ${name}! We see you've cancelled your account. We would love to get your feedback and know your experience with Task Manager App. Feel free to Sign In again anytime you want!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}