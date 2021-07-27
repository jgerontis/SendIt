// data models
const mongoose = require("mongoose");

const googleUser = mongoose.Schema(
  {
    access_token: String,
    refresh_token: String,
    scope: String,
    id_token: String,
    id: String,
    email: String,
    picture: String,
    settings: {
      darkTheme: Boolean,
    },
    code: String,
  },
  { timestamps: true }
);

const messageSchema = mongoose.Schema(
  {
    userId: String,
    type: String,
    destination: String,
    sendTime: Date,
    body: String,
    hasdelivered: Boolean,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
const GoogleUser = mongoose.model("GoogleUser", googleUser);

module.exports = {
  Message,
  GoogleUser,
};
