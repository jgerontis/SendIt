const {Message} = require("./model");
var nodemailer = require('nodemailer');
var theSender = require('../../theSenderInfo')
var ignore = require("../../ignoreMe.json")
const { google } = require("googleapis");

let counter = 0;

function myCountingProcess(){
    console.log(`fancy man ${counter}`);
    trySendMessage()
    counter ++;
}
function myCleanUpProcess(){
    console.log("_____________");
}


function trySendMessage(){
    var mNotD = []
    Message.find({delivered:false}, function(err, tmessages) {
        // Check if there was an error
        mNotD = tmessages;
      }).then((messages)=>{

        for(var i = 0; i < messages.length; i++){
            if(Date.parse(messages[i].sendTime) < Date.now()){
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                         type: "OAuth2",
                         user: "senditmessages2021", 
                         serviceClient: ignore.client_id,
                         clientSecret: ignore.client_id,
                         refreshToken: '1//04myvIB5pKKPqCgYIARAAGAQSNwF-L9IrnOGwZj-rNXHmLp1coQ6FHxDggMX4V3if10dpHT5YPnOYuMOb6hp8j08SjOJqxBgtrcc',
                         accessToken: 'ya29.a0ARrdaM_JI_2ITdyPkzCIpv7IrgBeppL47eaw6n767k0zVPEIcScs5oL2otnvSrQlQ3_p2ABSA97_nmt4GOiqxf4yRf_-XABg-snKrP_AzgVpwySukdGFcKI9wyO0jiChEATaciQTg4khRk28XbI4yUuZo1eP',
                    },
                    tls: {
                      rejectUnauthorized: false
                    }
                  });
                  
                  const mailOptions = {
                    from: "bob",
                    to: "4352365097@vtext.com",
                    subject: "Node.js Email with Secure OAuth",
                    text: messages[i].body
                  };
                  
                  transporter.sendMail(mailOptions, (error, response) => {
                    error ? console.log(error) : console.log(response);
                    transporter.close();
                  });
                  Message.updateOne({ _id: messages[i]._id },
                  { $set: {delivered: true} },
                  (err, updateOneResponse) => {
                      console.log(err)
                      console.log("==========================================")
                      console.log(updateOneResponse)
                  })
              }
        }
      });
  
  
}
trySendMessage()

module.exports = {myCountingProcess,
myCleanUpProcess,trySendMessage};

// SET UP THE ACTUAL APPLICATION