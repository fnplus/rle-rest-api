const functions = require("firebase-functions");

const express = require("express");

const app = express();

const api = require("./routes/api.js");

app.use("/api", api);

exports.app = functions.https.onRequest(app);
