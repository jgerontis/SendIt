var nodemailer = require('nodemailer');
//var theSender = require('../theSenderInfo')
var ignore = require("../../ignoreMe.json")
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

function trySendingEmail2(data, tokens){
  const oauth2Client = new OAuth2(
    ignore.web.client_id, // ClientID,
    ignore.web.client_id, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );
  
  oauth2Client.setCredentials({
    refresh_token: tokens.refresh_token
  });
  const accessToken = oauth2Client.getAccessToken()
  
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: data.gmail, 
         clientId: ignore.web.client_id,
         clientSecret: ignore.web.client_secret,
         refreshToken: tokens.refresh_token,
         accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  
  const mailOptions = {
    from: data.email,
    to: "4352365097@vtext.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
  };
  
  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
}



/*

console.log("thing")
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'senditmessages2021',
    accessToken: 'ya29.a0ARrdaM8Bd-tF7vw_zTfiT7yQE5Z6qE75o1o-MrvSzEkfe05ra7NEbP-RVVWEoxZ5ZJQNDWDiF8_os_EQbYGzlTKxSOR43RAb1P6CvIo1Ei4Pp8x0V6DP_1-K0uB-PJnQMkbzGZVGweCE3PdDDbO7opGR9TMN'
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

*/




function sendingTheEmail(data, token){
  console.log(data);
  console.log("2")
  console.log(token)
  console.log("3")
var transporter2 = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: data.email,
    accessToken: token.access_token,
    refreshToken: token.refresh_token,
    clientId: ignore.web.client_id,
    clientSecret: ignore.web.client_secret
    //accessUrl – is an optional HTTP endpoint for requesting new access tokens. This value defaults to Gmail
  },              
});

//console.log(transporter2)
var mailOptions = {
    from: data.email,
    to: '4352365097@vtext.com',
    //to: `senditmessages2021@gmail.com`,
    //from: "bob",
  subject: 'Sending Email using Node.js',
  text: 'For clients with plaintext support only',
  auth: {
    user: data.email,
    refreshToken: token.refresh_token,
    accessToken: token.access_token,
    expires: 1484314697598
}
};
console.log("working almost there")

transporter2.sendMail({
  from: data.email,
  to: "4352365097@vtext.com",
  subject: 'Message',
  text: 'I hope this message gets through!',
  auth: {
      user: data.email,
      refreshToken: token.refresh_token,
      accessToken: token.access_token,
      expires: 1484314697598
  },
  tls: {
    rejectUnauthorized: false
  }
});




/*
transporter2.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

}



function sendingNewMessage(data, token){
  console.log(data)
  console.log(token);
  console.log(token.access_token)
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: data.email,
        clientId: ignore.web.client_id,
        clientSecret: ignore.web.client_secret,
        refreshToken: token.refresh_token,
        accessToken: token.access_token
    }

});
let mailOptions = {
  from: `"phil" ${data.email}`,
  to: '4352365097@vtext.com',
  //to: `senditmessages2021@gmail.com`,
  //from: "bob",
subject: 'Sending Email using Node.js',
text: 'For clients with plaintext support only',

};

transporter.sendMail(mailOptions, function(error, info){
console.log(info)
console.log(error)
if(error){
  console.log(error)
}else{
  console.log("email sent: ", info.response)
}
})
}








function sendingFirstWay(data, token){
  console.log(data);
  console.log(token);
  let theTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: data.email,
      accessToken: token.id_token
    },
    name: "bob"
  });

  
  theTransporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = token.access_token;
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});


  let mailOptions = {
    from: `"phil" ${data.email}`,
    to: '4352365097@vtext.com',
    //to: `senditmessages2021@gmail.com`,
    //from: "bob",
  subject: 'Sending Email using Node.js',
  text: 'For clients with plaintext support only',
 
};

theTransporter.sendMail(mailOptions, function(error, info){
  console.log(info)
  console.log(error)
  if(error){
    console.log(error)
  }else{
    console.log("email sent: ", info.response)
  }
})
console.log("=========================================================")
console.log("=========================================================")
}

module.exports = {sendingTheEmail, trySendingEmail2, sendingFirstWay, sendingNewMessage}