const config = require('config'),
  Slack = require('./lib/send-slack.js'),
  slack = new Slack(config.slack),
  Mail = require('./lib/send-mail.js'),
  mail = new Mail(config.mail)

  try {
    throw Error('Whoops!');

  } catch (e) {
    slack.send(e)
    mail.send(e)
  }








// const SendMail = require('./lib/send-mail.js'),
//   SendSlack = require('./lib/send-slack.js'),
//   deepCopy = require('./lib/deep-copy.js'),
//   config = require('config'),
//   nodemailer = require('nodemailer'),
//   smtpPool = require('nodemailer-smtp-pool')
//
// let mailOpt = deepCopy(config.mailOpt)
// let mailSender = deepCopy(config.mailSender)
//
// for(const mailAddr of config.mailList){
//   Object.assign(mailOpt, {
//     to: mailAddr,
//     subject: 'this is test mail',
//     html: 'hello nodemailer'
//   })
//
//   const sendMail = new SendMail(mailOpt, mailSender)
//   sendMail.send()
// }
