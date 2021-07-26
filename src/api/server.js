// server.js
// API endpoints etc.
const express = require("express");
// const Model = require("mongoose");
const cors = require("cors");

const googleCon = require("./google-util");
// const test = require("./test");

const app = express();
const { Message, GoogleUser } = require("./model");

let users = {};

var picture = "";

app.use(cors());

app.use(express.static("static"));
app.use(express.json({}));

let propertyList = {
  userId: "",
  type: "",
  destination: "",
  sendTime: Date.now(),
  body: "",
  delivered: false,
};

app.use((req, res, next) => {
  console.log(
    " | Time: ",
    Date.now(),
    " | Method: ",
    req.method,
    " | Path: ",
    req.originalUrl,
    " | Body: ",
    req.body,
    " | "
  );
  next();
});

// Message things
app.get("/picture", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  console.log(picture);
  res.send(picture);
});

app.get("/guser/:goid", (req, res) => {
  console.log("========================================");
  console.log("New Signin:");
  console.log(req.params.goid);
  GoogleUser.find({ id: req.params.goid }, (err, guser) => {
    console.log(guser);

    res.send(guser);
  });
});

app.patch("/guser/:goid", (req, res) => {
  console.log("patching guser");

  const filter = { id: req.params.goid };

  GoogleUser.findOneAndUpdate(filter, req.body, {}, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/loginsuccess", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(req.query.code);
  googleCon.getAccessTokenFromCode(req.query.code).then((tokenData) => {
    //console.log(`this is the token ${token}`)

    googleCon
      .getGoogleUserInfo(tokenData)
      .then((data) => {
        users[data.id] = { data: data, token: tokenData };

        var string = encodeURIComponent(req.query.code);
        let checkId = {};
        GoogleUser.findOne({ id: data.id }, (err, guser) => {
          console.log("=============================");
          checkId = guser;
          console.log(checkId);
        }).then((err, user) => {
          console.log(checkId);
          console.log(user);
          console.log("__________________________________________________");
          if (checkId == null || checkId == undefined || checkId.id == "") {
            GoogleUser.create(
              {
                access_token: tokenData.access_token,
                refresh_token: tokenData.refresh_token,
                scope: tokenData.scope,
                id_token: tokenData.id_token,
                id: data.id,
                email: data.email,
                picture: data.picture,
                settings: {
                  darkTheme: false,
                },
              },
              (err, message) => {
                console.log(message);
                //res.status(201).json(message);
              }
            );
          }
        });

        picture = data.picture;
        console.log(picture);
        res.redirect("/app.html?code=" + string + "&id=" + data.id);

        //test.sendingNewMessage(data, tokenData)
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  });
});

app.get("/message/:requesterId", (req, res) => {
  // todo:
  // put userid from googe inside req.body
  // filter retrieved messages by userid
  res.setHeader("Content-Type", "application/json");

  Message.find({ userId: req.params.requesterId }, function(err, messages) {
    // Check if there was an error
    if (err) {
      console.log(`there was an error in listing messages`, err);
      res
        .status(500)
        .json({ errMessage: `unable to list messages`, error: err });
      return;
    }
    res.status(200).send(messages);
  });
});

app.get("/master", (req, res) => {
  console.log(users);
  res.setHeader("Content-Type", "application/json");
  console.log("doing a get all for messages");
  console.log(req.query.code);

  Message.find({}, function(err, messages) {
    // Check if there was an error
    if (err) {
      console.log(`there was an error in listing messages`, err);
      res
        .status(500)
        .json({ errMessage: `unable to list messages`, error: err });
      return;
    }
    res.status(200).send(messages);
  });
});

app.get("/googleUrl", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(googleCon.urlGoogle());
});

app.post("/message", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a message with body:`, req.body);
  Message.create(
    {
      userId: req.body.userId,
      type: req.body.type,
      destination: req.body.destination,
      sendTime: req.body.sendTime,
      body: req.body.body,
      delivered: false,
    },
    (err, message) => {
      if (err) {
        console.log(`unable to create message`);
        res
          .status(500)
          .json({ errMessage: `Unable to create message`, error: err });
      }
      res.status(201).json(message);
    }
  );
});

// delete before live
app.delete("/master", (req, res) => {
  console.log("Deleting all messages");
  res.setHeader("Content-Type", "application/json");
  Message.remove({}, (err) => {
    if (err) {
      res.status(500).json({ errMessage: err });
    } else {
      res.status(202).json({ message: "Deleted all messages" });
    }
  });
});

app.delete("/message/:id", (req, res) => {
  console.log(`deleting message with id ${req.params.id}`);
  res.setHeader("Content-Type", "application/json");

  Message.findByIdAndDelete(req.params.id, (err, message) => {
    if (err) {
      console.log(`unable to delete message`);
      res
        .status(500)
        .json({ errMessage: `Unable to delete message`, error: err });
    }
    res.status(202).json(message);
  });
});
// Patch - update
app.patch("/message/:id", (req, res) => {
  let updateMessage = {};

  Message.findById(req.params.id, (err, message) => {
    updateMessage = message;
  });

  for (const property in propertyList) {
    if (req.body[property] !== null && req.body[property] !== undefined) {
      updateMessage[property] = req.body[property];
    }
    console.log(updateMessage);
  }

  Message.updateOne(
    { _id: req.params.id },
    { $set: updateMessage },
    (err, updateOneResponse) => {
      if (err) {
        console.log(`unable to patch`);
        res
          .status(500)
          .json({ message: `Unable to patch message`, error: err });

        return;
      }
      if (updateOneResponse.n === 0) {
        res
          .status(404)
          .json({ message: `Unable to patch message: not found`, error: err });

        return;
      }
      res.status(203).json(`${updateOneResponse.nModified} were modified`);
    }
  );
});

// User things

module.exports = app;

//post user
//get by date
//patch for user
