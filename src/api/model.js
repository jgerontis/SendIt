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

const googleUser = mongoose.Schema({
  access_token: String,
  refresh_token: String,
  scope: String,
  id_token: String,
  id: String,
  email: String,
  picture: String,
},
  { timestamps: true }
);

const messageSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: String,
    destination: String,
    sendTime: Date,
    body: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
const User = mongoose.model("User", userSchema);
const GoogleUser = mongoose.model("GoogleUser", googleUser);

module.exports = {
  Message,
  User,
  GoogleUser,
};
