const express = require("express");

const mongoose = require("mongoose");
const config = require("./config");
const setupController = require("./controllers/setupController");
const apicontroller = require("./controllers/apiController");
const app = express();
const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());
setupController(app);
apicontroller(app);

app.listen(port);
