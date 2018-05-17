const nodemailer = require('nodemailer'),
  smtpPool = require('nodemailer-smtp-pool'),
  Alert = require('./alert.js')

module.exports = class SendMail extends Alert {
  send(err){
    let smtpTransport = nodemailer.createTransport(smtpPool(this.mailSender)),
      sendTo = this.mailSendTo,
      content = this.describeErr(err)

      for (let mailAddr of sendTo) {
        Object.assign(this.mail.mailOpt, {
          to: mailAddr,
          subject: `Error: ${err.message}`,
          html: content
        })
        smtpTransport.sendMail(this.mail.mailOpt, function(err, res){
        if(err) console.log(err)
        else console.log('Message sent : ', res)
        smtpTransport.close()
    })
  }
}
}
