var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'senditmessages2021',
    accessToken: 'ya29.a0ARrdaM_X6SJOS7ijZAD6ClJWBPpWPhSvDLHPjyURFkMoZz2EIpx460LAVd9eT-AjuMyisX-SoASlKh2Hl15Cpb1G3ppS4ctJTCFluB2ZB62ygtzdqRO6g2u3GhjrZvZX_FEon_6YKPAxEbxbCyiwqtmgxJPb'
  },
  name: "bob"
});

transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});

var mailOptions = {
    from: `"phil" senditmessages2021@gmail.com`,
    to: '4352365097@vtext.com',
    //to: `senditmessages2021@gmail.com`,
    //from: "bob",
  subject: 'Sending Email using Node.js',
  text: 'For clients with plaintext support only',
 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
