const {Todo} = require("./model");

let counter = 0;

function myCountingProcess(){
    console.log(`fancy man ${counter}`);
    counter ++;
}
function myCleanUpProcess(){
    console.log("Doing Something again");


    Todo.find({}, function (err, todos) {
        // Check if there was an error
        if(err){
            console.log(`there was an error in listing todos`, err);
            return;
        }
        let d = new Date();
        d.setDate(d.getDate()+1);

        Todo.deleteMany({done: true, deadline: {$gt: d}}, (err, deleteResult) =>{
            console.log(`deleted ${deleteResult.deletedCount} todos`)
        })
    })

}
module.exports = {myCountingProcess,
myCleanUpProcess,};