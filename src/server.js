// server.js
// API endpoints etc.
const { application } = require("express");
const express = require("express");
const { Model } = require("mongoose");
const cors = require("cors")

const saveM = require("./saveManager");
const app = express();
const {store,Todo} = require("./model");

app.use(cors())

app.use(express.static("static"))
app.use(express.json({}));
