var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testgmc483@gmail.com',
    pass: 'Abc.123.'
  }
});

var mailOptions = {
  from: 'testgmc483@gmail.com',
  to: 'adembedoui@icloud.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});