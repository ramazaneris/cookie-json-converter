import { scv } from "./module/index";

import express, { Request, Response } from "express";

import "dotenv/config";
const server = express();

server.get("/setCookie", (req: Request, res: Response) => {
  res.cookie("icookie", "5s").send("ok");
});

server.get("/getAllCookie", (req: Request, res: Response) => {
  console.log(scv(req)); // return {...icookie:"5s"}
  res.send("check the console");
});

server.get("/getCookie", (req: Request, res: Response) => {
  console.log(scv(req)["icookie"]); //return "5s"
  res.send("ok");
});

server.listen(process.env.PORT, () => {
  console.log("READY!");
});
