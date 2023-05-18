
const transport = require('./config')
const sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");

    transport.sendMail({
      from: 'Werblo',
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${name}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href=http://localhost:3000/api/confirm/?confirmationCode=${confirmationCode}> Click here</a>
      </div>`,
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            transport.close();
        }
    })
  };


  const sendPasswordResetEmail = (name, email, id, token) => {
    console.log("Check");

    transport.sendMail({
      from: 'Werblo',
      to: email,
      subject: "Password Reset",
      html: `<h1>Reset Password</h1>
      <h2>Hello ${name}</h2>
      <p>Click this link to change your password</p>
      <a href=http://localhost:3000/change-password/?token=${token}&id=${id}>Click here</a>`,
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            transport.close();
        }
    })
  };


  const sendStoreCreatedEmail = (name, url, email, whatsapp, address) => {
    console.log("Check");

    transport.sendMail({
      from: 'Werblo',
      to: email,
      subject: "Store created",
      html: `<h1>Congratulations on becoming a seller, enjoy great sales and help other as you earn with us!</h1>
      <h2>Hello ${name}</h2>
      <p>Here is your store url and details, share with your customers</p>
      <a>${url}</a>
      <h5>${whatsapp}</h5>
      <p>${address}</p>`,
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            transport.close();
        }
    })
  };

  module.exports = {sendConfirmationEmail, sendPasswordResetEmail, sendStoreCreatedEmail};