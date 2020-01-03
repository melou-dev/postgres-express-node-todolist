const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

const app = express();

const port = 4000;

const db = new Sequelize(
  "todolistchristmas",
  "todolistchristmas",
  "lavieestbelle",
  {
    host: "localhost",
    dialect: "postgres"
  }
);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness."
  })
);

module.exports = app;
