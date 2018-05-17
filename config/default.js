module.exports = {
  mail: {
    mailList: ['jamesohn247@gmail.com'],
    mailOpt: {
      from: 'mmok05289@gmail.com',
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
          user:'mmok05289@gmail.com',
          pass:'aorqnr9800'
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
        Authorization: 'Bearer xoxp-325461250018-325778363764-364761217040-2a246587ecbc56bf135c2572a7f0c5b0',
      },
      json: true,
    }
  }
}
