const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/index");
const cookieParser = require('cookie-parser')


app.use(cors({credentials: true,origin: 'http://localhost:3006'}
  
));
app.use(morgan("combined"));
app.set("trust proxy", true);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

const port = 5000;
app.listen(port, () => {
  console.log("Server listen port =" + port);
});
