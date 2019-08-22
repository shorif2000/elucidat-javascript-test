const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.disable("x-powered-by");
app.use("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log('apperro' , err)
  res.status(err.status || 500);
  res.json({ error: err.message || err.msg });
});

module.exports = app;

