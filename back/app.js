const express = require("express");
const bodyParser = require('body-parser');
const newsRoutes = require("./routes/newsRoutes");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use("/api/v1/news", newsRoutes);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser())

module.exports = app;
