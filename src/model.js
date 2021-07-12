// data models
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fName: String,
    lName: String,
    pNumber: String,
    emailAddr: String,
    password: String,
  },
  { timestamps: true }
);

const messageSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: String,
    destinationNum: String,
    destinationAddr: String,
    sendTime: Date,
    body: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Message,
  User,
};
