const { Message, GoogleUser } = require("./model");
var nodemailer = require("nodemailer");
// var theSender = require("../../theSenderInfo");
// var ignore = require("../../ignoreMe.json");
// const { google } = require("googleapis");

function myCountingProcess() {
  // console.log(`fancy man ${counter}`);
  trySendMessage();
}
function myCleanUpProcess() {
  // console.log("_____________");
}

function usingTheNodemailer(guser){
  console.log(guser)
  let theTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: guser.email,
      accessToken: guser.access_token
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
        console.log("this is the messages:",messages)
        GoogleUser.find({id:messages[i].userId}, (err, users)=>{
          console.log("this is the users", users);
          usingTheNodemailer(users[0])

        })
        Message.updateOne(
          { _id: messages[i]._id },
          { $set: { delivered: true } },
          (error, updateOneResponse) => {
            console.log(error);
            console.log("==========================================");
            console.log(updateOneResponse);
          }
        );
      }
    }
  });
}
trySendMessage();

module.exports = { myCountingProcess, myCleanUpProcess, trySendMessage };

// SET UP THE ACTUAL APPLICATION
