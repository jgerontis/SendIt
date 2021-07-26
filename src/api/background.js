const { Message, GoogleUser } = require("./model");
var nodemailer = require("nodemailer");
// var theSender = require("../../theSenderInfo");
var ignore = require("../../ignoreMe.json");
// const { google } = require("googleapis");

function myCountingProcess() {
  // console.log(`fancy man ${counter}`);
  trySendMessage();
}
function myCleanUpProcess() {
  // console.log("_____________");
}

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
    //to: `senditmessages2021@gmail.com`,
    //from: "bob",
  //subject: message.body,
  text: message.body,
 
};
console.log(mailOptions)
theTransporter.sendMail(mailOptions, function(error, info){
  console.log(info)
  console.log(error)
  if(error){
    console.log(error)
  }else{
    console.log("email sent: ", info.response)
  }
})
}

function trySendMessage() {
  //var mNotD;
  Message.find({ delivered: false }, function(err, tmessages) {
    if (err || !tmessages) {
      console.log("failed");
    }
    
  }).then((messages) => {
    for (var i = 0; i < messages.length; i++) {

      if (Date.parse(messages[i].sendTime) < Date.now()) {
        console.log("this is the other message,", messages[i])
        let sendMessage = messages[i]
        GoogleUser.find({id:messages[i].userId}, (err, users)=>{
          console.log("working until here)")
          usingTheNodemailer(users[0], sendMessage)

        }).then(()=>{
          console.log("hmmm")
          /*Message.updateOne(
            { _id: messages[i]._id },
            { $set: { delivered: true } },
            (error, updateOneResponse) => {
              console.log(error);
              console.log("==========================================");
              console.log(updateOneResponse);
            }
          );*/
        })
        
      }
    }
  });
}

module.exports = { myCountingProcess, myCleanUpProcess, trySendMessage };

// SET UP THE ACTUAL APPLICATION
