// import { history } from './controller/index.js';

// now you can use the history variable
// console.log(history);

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const bodyParser = require("body-parser");
const { generateResponse } = require("./controllers/index.js");


const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.json());

app.post("/generate", generateResponse);

app.get("/generate", (req, res) => {
    res.send(history);
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
