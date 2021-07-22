// server.js
// API endpoints etc.
const express = require("express");
// const Model = require("mongoose");
const cors = require("cors");

const googleCon = require("./google-util");
// const test = require("./test");

const app = express();
const { Message, User, GoogleUser } = require("./model");

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
};
let userPropertyList = {
  fName: "",
  lName: "",
  pNumber: "",
  emailAddr: "",
  password: "",
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
  console.log(req.params.goid);
  GoogleUser.find({ id: req.params.goid }, (err, guser) => {
    console.log(guser);

    res.send(guser);
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
        //console.log("worked it is, ", data)
        console.log("working til here");

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
              },
              (err, message) => {
                console.log(message);
                //res.status(201).json(message);
              }
            );
          } else {
            console.log("already here");
          }
          test
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

app.get("/message", (req, res) => {
  console.log(users);
  // todo:
  // put userid from googe inside req.body
  // filter retrieved messages by userid
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

app.get("/message/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("doing a get one for message");

  console.log(`${req.params._id}`);

  Message.findById(req.params._id, (err, message) => {
    if (err) {
      console.log(
        `there was an error finding a message with id ${req.params._id}`,
        err
      );
      res.status(500).json({
        errMessage: `message with id ${req.params._id} not found`,
        error: err,
      });
      return;
    } else if (message === null) {
      res.status(404).send(JSON.stringify({ error: "not found" }));
      return;
    }
    res.status(200).json(message);
  });
});

app.get("/googleUrl", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(googleCon.urlGoogle());
});

app.post("/message", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a message`);
  console.log(`this is a thing body`, req.body);
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

app.get("/user", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("doing a get all for user");

  User.find({}, function(err, users) {
    // Check if there was an error
    if (err) {
      console.log(`there was an error in listing users`, err);
      res.status(500).json({ errMessage: `unable to list users`, error: err });
      return;
    }
    res.status(200).send(users);
  });
});

app.get("/user/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("doing a get one for user");

  console.log(`${req.params._id}`);

  User.findById(req.params._id, (err, user) => {
    if (err) {
      console.log(
        `there was an error finding a user with id ${req.params._id}`,
        err
      );
      res.status(500).json({
        errMessage: `user with id ${req.params._id} not found`,
        error: err,
      });
      return;
    } else if (user === null) {
      res.status(404).send(JSON.stringify({ error: "not found" }));
      return;
    }
    res.status(200).json(user);
  });
});

app.post("/user", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a user`);
  console.log(`this is a thing body`, req.body);
  User.create(
    {
      fName: req.body.fName,
      lName: req.body.lName,
      pNumber: req.body.pNumber,
      emailAddr: req.body.emailAddr,
      password: req.body.password,
    },
    (err, user) => {
      if (err) {
        console.log(`unable to create user`);
        res
          .status(500)
          .json({ errMessage: `Unable to create user`, error: err });
      }
      res.status(201).json(user);
    }
  );
});

app.delete("/user/:id", (req, res) => {
  console.log(`deleting user with id ${req.params.id}`);
  res.setHeader("Content-Type", "application/json");

  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      console.log(`unable to delete user`);
      res.status(500).json({ errMessage: `Unable to delete user`, error: err });
    }
    res.status(202).json(user);
  });
});
// Patch - update
app.patch("/user/:id", (req, res) => {
  let updateUser = {};

  User.findById(req.params.id, (err, user) => {
    updateUser = user;
  });

  for (const property in userPropertyList) {
    if (req.body[property] !== null && req.body[property] !== undefined) {
      updateUser[property] = req.body[property];
    }
    console.log(updateUser);
  }

  User.updateOne(
    { _id: req.params.id },
    { $set: updateUser },
    (err, updateOneResponse) => {
      if (err) {
        console.log(`unable to patch`);
        res.status(500).json({ message: `Unable to patch user`, error: err });

        return;
      }
      if (updateOneResponse.n === 0) {
        res
          .status(404)
          .json({ message: `Unable to patch user: not found`, error: err });

        return;
      }
      res.status(203).json(`${updateOneResponse.nModified} were modified`);
    }
  );
});

module.exports = app;

//post user
//get by date
//patch for user
