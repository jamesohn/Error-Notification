const request = require('request-promise'),
  Alert = require('./alert.js'),
  copyObj = require('./deep-copy.js')

module.exports = class Slack extends Alert {
  send(err) {
    let optList = copyObj(this.slack.slackOpt),
      sendTo = this.slackSendTo,
      content = this.describeErr(err)

    for (let each of sendTo) {
      Object.assign(optList.formData,{
        username: 'Error Alert',
        channel: each,
        text: content
      })
      request(optList).then(function(res){
        console.log(`${err.message} send to ${each} successfully`);
      }).catch(function(err){
        console.log(`ErrorMessage was not properly sent to slack: ${each}`);
      })
    }
  }
}
