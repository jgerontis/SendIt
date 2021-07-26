const { Message } = require("./model");
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

function trySendMessage() {
  //var mNotD;
  Message.find({ delivered: false }, function(err, tmessages) {
    if (err || !tmessages) {
      console.log("failed");
    }
  }).then((messages) => {
    for (var i = 0; i < messages.length; i++) {
      if (Date.parse(messages[i].sendTime) < Date.now()) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "senditmessages2021@gmail.com",

            refreshToken:
              "1//04D8JKf2TLd3FCgYIARAAGAQSNwF-L9IrUxUlQPS2GhCl1CQLQ16qCsRIxOImp0yye1O9JOhs3PY-x1S8x9wv77deLYGA6jqDEjk",
            accessToken:
              "ya29.a0ARrdaM8pNFDH6b4JHZ_U9oB6HwZTiZ1FBk0afFeohrfb4KphMYlyCLS8o0mk6MQ6cYdJnCIy13_FE3AocZILwjBiBkZVeQnoUFgXhGxmb0YaOUUZ2PJSBz5AwVhymC4-GB8mTyvru3OEZApy-QFszDFfQhcM",
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const mailOptions = {
          from: "bob",
          to: "4352365097@vtext.com",
          subject: "Node.js Email with Secure OAuth",
          text: messages[i].body,
        };

        transporter.sendMail(mailOptions, (error, response) => {
          error ? console.log(error) : console.log(response);
          transporter.close();
        });
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
