import mongoose from "mongoose";
import { errorHandler } from "./middlewares/errorHandler";

import path from "path";

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

import config from "./config/config";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Error handling middleware
app.use(errorHandler);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("MongoDB connected");
    // Start the server
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err) => console.error("Mongo connection error:", err));

module.exports = app;
