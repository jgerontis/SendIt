const {Message} = require("./model");

let counter = 0;

function myCountingProcess(){
    console.log(`fancy man ${counter}`);
    counter ++;
}
function myCleanUpProcess(){
    console.log("Doing Something again");
}
module.exports = {myCountingProcess,
myCleanUpProcess,};

// SET UP THE ACTUAL APPLICATION