const { Message, GoogleUser } = require("./model");
var nodemailer = require("nodemailer");
// var theSender = require("../../theSenderInfo");
var ignore = require("../../ignoreMe.json");
// const { google } = require("googleapis");

function usingTheNodemailer(guser, message){
  console.log("this is the user,", guser)
  console.log("this is the message,", message);
  console.log(ignore);
  let theTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: guser.email,
      accessToken: guser.access_token,
      refreshToken: guser.refresh_token,
      clientSecret: ignore.web.client_secret,
      clientId: ignore.web.client_id,
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
    from: `"phil" ${guser.email}`,
    to: '4352365097@vtext.com',
    text: message.body,
 
};
let returnThing = ""
console.log(mailOptions)
theTransporter.sendMail(mailOptions, function(error, info){
  console.log(info)
  console.log(error)
  if(error){
    console.log(error)
  }else{
    console.log("email sent: ", info.response)
    returnThing = info.response
  }
})
return returnThing

}

function trySendMessage() {
  //var mNotD;
  Message.find({ hasdelivered: false }, function(err, tmessages) {
    //console.log(tmessages)
    if (err || !tmessages) {
      console.log(err);
    }
    
  }).then((messages) => {

    for (var i = 0; i < messages.length; i++) {
      console.log("messages ",messages)

      let sendMessage = messages[i]
      var theUser = ""
      console.log(Date.parse(messages[i].sendTime) - Date.now())
      console.log(Date.parse(messages[i].sendTime) < Date.now());
      
      if (Date.parse(sendMessage.sendTime) - Date.now() < 0) {
        GoogleUser.find({id:sendMessage.userId}, (err, users)=>{
          theUser = users[0]
        }).then(()=>{
          usingTheNodemailer(theUser, sendMessage)
          Message.updateOne(
            { _id: sendMessage._id },
            { $set: { hasdelivered: true } },
            (error, updateOneResponse) => {
              console.log(error);
              console.log("==========================================");
              console.log(updateOneResponse);
            }
          );
        })
        
        
          
        
        
      }
    }
  });
}

module.exports = { trySendMessage };

// SET UP THE ACTUAL APPLICATION
