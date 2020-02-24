const nodemailer = require('nodemailer');
const env = require('../config/constants')

exports.showMessageForm = (req,res)=>{
return res.status(200).render('message')
}
exports.sendMessage = (req, res) => {
        let transporter = nodemailer.createTransport({
          service: env.MAIL_SERVICE,
          auth: {
            user: env.MAIL_USER,
            pass: env.MAIL_PASS
          }
        });
        let mailOptions = {
          from: env.MAIL_SENDER,
          to: 'seyiogunjuyigbe@gmail.com',
          subject: 'New Message',
          text: `Good day Pastor, \n 
                A new message was sent to you from the church website.
                
            Sender: ${req.body.sender},
            Email: ${req.body.email},
            Title: ${req.body.title},
            Message: ${req.body.message}

          `
        };
      
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            res.status(500).render('404', {error})
          } else {
            res.status(200).render('success',{
              message: "Message sent!"
            });
          }
        });
      }
