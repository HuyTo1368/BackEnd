const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/index");
const  getVillageId  = require("./xuli/EnterData");

app.use(cors());
app.use(morgan("combined"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = 5000;
app.listen(port, () => {
  console.log("Server listen port =" + port);
});
