// index.js
// server entry point

const server = require("./server");
const persist = require("./persist");

const background = require("./background");

//define a port
const portNumber = process.argv[2] || process.env.PORT || 3000;
console.log(portNumber);
persist.connect(() => {
  //start the server
  server.listen(portNumber, () => {
    console.log(`running on ${portNumber}`);
  });
});

//start background process
setInterval(() => {
  background.myCountingProcess();
}, 1000);
setInterval(() => {
  background.myCleanUpProcess();
}, 1000);
