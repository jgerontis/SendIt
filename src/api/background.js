const { Message, GoogleUser } = require("./model");
var nodemailer = require("nodemailer");
// var theSender = require("../../theSenderInfo");
var ignore = require("../../ignoreMe.json");
// const { google } = require("googleapis");
var providerList = [
  "sms.alltelwireless.com",
  "sms.myboostmobile.com",
  "myboostmobile.com",
  "txt.att.net",
  "mymetropcs.com",
  "msg.fi.google.com",
  "text.republicwireless.com",
  "messaging.sprintpcs.com",
  "pm.sprint.com",
  "message.ting.com",
  "tmomail.net",
  "email.uscc.net",
  "mms.uscc.net",
  "vtext.com",
  "vzwpix.com",
  "mypixmessages.com",
  "vmobl.com",
  "vmpix.com",
];
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function usingTheNodemailer(guser, message) {
  let theTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: guser.email,
      accessToken: guser.access_token,
      refreshToken: guser.refresh_token,
      clientSecret: ignore.web.client_secret,
      clientId: ignore.web.client_id,
    },
    name: "bob",
  });

  theTransporter.set("oauth2_provision_cb", (user, renew, callback) => {
    let accessToken = guser.access_token;
    if (!accessToken) {
      return callback(new Error("Unknown user"));
    } else {
      return callback(null, accessToken);
    }
  });
  if (message.type === "email") {
    let destistring = message.destination;
    let mailOptions = {
      from: `"phil" ${guser.email}`,
      to: destistring,
      text: message.body,
    };
    theTransporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("email sent: ", info.response);
        console.log("this is the message", message);
      }
    });
  } else {
    let sent = false;
    for (var i = 0; i < providerList.length; i++) {
      if (sent == false) {
        let destistring = message.destination + "@" + providerList[i];
        let mailOptions = {
          from: `${guser.email}`,
          to: destistring,
          text: message.body,
        };
        theTransporter.sendMail(mailOptions, function(error, info) {
          console.log(info);
          console.log(error);
          if (error) {
            console.log(error);
          } else {
            console.log("email sent: ", info.response);
            console.log("this is the message", message);
            sent = true;
          }
        });
      }
      sleep(1000);
    }
  }
}

function trySendMessage() {
  //var mNotD;
  Message.find({ hasdelivered: false }, function(err, tmessages) {
    if (err || !tmessages) {
      console.log(err);
    }
  }).then((messages) => {
    for (var i = 0; i < messages.length; i++) {
      let sendMessage = messages[i];
      var theUser = "";
      console.log(Date.parse(messages[i].sendTime) - Date.now());
      console.log(Date.parse(messages[i].sendTime) < Date.now());

      if (Date.parse(sendMessage.sendTime) - Date.now() < 0) {
        GoogleUser.find({ id: sendMessage.userId }, (err, users) => {
          theUser = users[0];
        }).then(() => {
          usingTheNodemailer(theUser, sendMessage);
          Message.updateOne(
            { _id: sendMessage._id },
            { $set: { hasdelivered: true } },
            (error, updateOneResponse) => {
              console.log(error);
              console.log("==========================================");
              console.log(updateOneResponse);
            }
          );
        });
      }
    }
  });
}

module.exports = { trySendMessage };
