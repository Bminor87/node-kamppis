import { Request, Response, NextFunction } from "express";
var express = require("express");
var router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("This is a test");
});

module.exports = router;
