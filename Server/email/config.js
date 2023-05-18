const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ermystyler@gmail.com",
    pass: 'etofpyqirnbdudco',
  },
});
module.exports = transport;