// server.js
// API endpoints etc.
const { application } = require("express");
const express = require("express");
const { Model } = require("mongoose");
const cors = require("cors")

const app = express();
const {Message,User} = require("./model");

app.use(cors())

app.use(express.static("static"))
app.use(express.json({}));

propertyList = {userId:"", type:"", destinationNum:0, destinationAddr: "", sendTime: Date.now(), body:""}

app.use((req,res,next)=>{
    console.log(" | Time: ", Date.now(), " | Method: ", req.method, " | Path: ", req.originalUrl, " | Body: ", req.body, " | ");
    next();
})

app.get("/message", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log("doing a get all");    
    
    
    Message.find({}, function (err, messages) {
        // Check if there was an error
        if(err){
            console.log(`there was an error in listing messages`, err);
            res.status(500).json({errMessage: `unable to list messages`, error: err})
            return;
        }
        res.status(200).send(messages);
    })
})

app.get('/message/:id', (req,res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log("doing a get one");  

    console.log(`${req.params._id}`);

    Message.findById(req.params._id, (err, message)=>{
        if(err){
            console.log(`there was an error finding a message with id ${req.params._id}`, err)
            res.status(500).json({errMessage:`message with id ${req.params._id} not found`,
                    error: err,
            });
            return;
        }else if (message === null){
            res.status(404).send(JSON.stringify({error: "not found"}));
            return;
        }
        res.status(200).json(message);
    });

});

app.post('/message', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(`this is a thing body`, req.body);
    Message.create({
        userId: req.body.userId,
        type: req.body.type,
        destinationNum: req.body.destinationNum,
        destinationAddr: req.body.destinationAddr,
        sendTime: req.body.sendTime,
        body: req.body.body,
    }, (err, message)=>{
        if (err){
            console.log(`unable to create message`)
            res.status(500).json({errMessage: `Unable to create message`, error: err})
        }
        res.status(201).json(message)
    });

});

app.delete('/message/:id', (req, res) => {
    console.log(req.params.id);
    res.setHeader("Content-Type", "application/json");
    

    Message.findByIdAndDelete(req.params.id,(err, message)=>{
        if (err){
            console.log(`unable to delete message`)
            res.status(500).json({errMessage: `Unable to delete message`, error: err})
        }
        res.status(202).json(message);

    })

})
// Patch - update
app.patch('/message/:id', (req, res) => {

    let updateMessage = {}

    Message.findById(req.params.id, (err, message)=>{
        updateMessage = message;
    })

    for(const property in propertyList){
        if (req.body[property] !== null && req.body[property] !== undefined){
            updateMessage[property] = req.body[property]
        }
        console.log(updateMessage);
    }

    Message.updateOne({_id: req.params.id}, {$set: updateMessage}, (err, updateOneResponse)=>{
        if(err){
            console.log(`unable to patch`)
            res.status(500).json({message: `Unable to patch message`, error: err})

            return;
        }
        if(updateOneResponse.n === 0){
            res.status(404).json({message: `Unable to patch message: not found`, error: err})

            return;
        }
        res.status(203).json(`${updateOneResponse.nModified} were modified`);
    })

})


module.exports = app;

//post user
//get by date
//patch for user
