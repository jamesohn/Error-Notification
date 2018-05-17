module.exports = class ErrorMessage {

  constructor(config=require('config'), slack=require('config').slack, mail=require('config').mail) {
    this.slack = slack
    this.slackSendTo = slack.directMessageList.concat(slack.channelList)
    this.mail = mail
    this.mailSender = this.mail.mailSender
    this.mailSendTo = this.mail.mailList
  }

  describeErr(err) {
    let message = err.message,
      code = err.code,
      stack = err.stack
    return(message, code, stack)
  }

}
