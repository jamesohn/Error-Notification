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
    directMessageList: ['U9KNWAPNG','U9KH344SH','U9MJW2VBK','U9N2USF6F'],
    channelList: [],
    slackOpt: {
      method: 'POST',
      uri: 'https://slack.com/api/chat.postMessage', // Default: Incoming WebHooks Direct message to james https://hooks.slack.com/services/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
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
