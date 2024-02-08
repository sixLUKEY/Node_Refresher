import express from "express";

const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());

app.listen(port);
