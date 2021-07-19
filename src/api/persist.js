// connection to mongo
const mongoose = require("mongoose");
const db = mongoose.connection;

function connect(callback){
    let connectionString = "mongodb+srv://froggy:myCoolPassword@cluster0.cgzhh.mongodb.net/sendit?retryWrites=true&w=majority";

    console.log("connecting");

    mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch((err)=>{
        console.log("there was an error connecting to mongo: ", err)
    });
    db.once("open", callback)

}

module.exports = {
    connect,
}