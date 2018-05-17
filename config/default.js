module.exports = {
  mail: {
    mailList: [], //Send to mailAddr
    mailOpt: {
      from: '', //Sender mailAddr
      to: '',
      subject: '',
      html: '',
    },
    mailSender: {
      service:'Gmail',
      host:'localhost',
      port:'465',
      tls:{
          rejectUnauthorize:false
      },
      auth:{
          user:'',  //Sender mailAddr
          pass:'' //Sender mail PW
      },
      maxConnections:5,
      maxMessages:10
    }
  },
  slack: {
    directMessageList: [],
    channelList: ['#error_report'],
    slackOpt: {
      method: 'POST',
      uri: 'https://slack.com/api/chat.postMessage',
      formData: {
        // text: 'assign error detail'
      },
      headers: {
        contentType: 'application/json',
        Authorization: '',
      },
      json: true,
    }
  }
}
