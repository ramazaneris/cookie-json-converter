"use strict";
exports.__esModule = true;

var { scv } = require("./module/index");

var express = require("express");

require("dotenv/config");

var server = express();

server.get("/setCookie", function (req, res) {
  res.cookie("icookie", "5s").send("ok");
});

server.get("/getAllCookie", function (req, res) {
  console.log(scv(req)); // return {...icookie:"5s"}
  res.send("check the console");
});

server.get("/getCookie", function (req, res) {
  console.log(scv(req)["icookie"]); //return "5s"
  res.send("ok");
});

server.listen(process.env.PORT, function () {
  console.log("READY!");
});
