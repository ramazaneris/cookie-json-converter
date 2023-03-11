## Simple express cookie to json converter

### Setup

CommonJS
```js
const express = require("express");
const { scv } = require("cookie-json-converter");

var app = express();

app.listen(/*...*/);
```

EsModule
```ts
import express from "express";
import { scv } from "cookie-json-converter";

var app = express();

app.listen(/*...*/);
```

---

### Examples

CommonJS
```js
app.get("setCookie",function(req,res){
    res.cookie(/*"cookie name"*/,/*"cookie value"*/,/*"options"*/).send("cookies setted")
})

app.get("/getCookies",function (req,res){
    console.log(scv)
    res.send("check the console")
})

app.cookie("/getCookie",function (req,res){
    console.log(scv[/*cookie name*/])
    res.send("check the console")
})
```

EsModule
```ts
app.get("setCookie",function(req:Request,res:Response){
    res.cookie(/*"cookie name"*/,/*"cookie value"*/,/*"options"*/).send("cookies setted")
})

app.get("/getCookies",function (req:Request,res:Response){
    console.log(scv)//returns {"coookie name":"cookievalue"}
    res.send("check the console")
})

app.cookie("/getCookie",function (req:Request,res:Response){
    console.log(scv[/*cookie name*/])//returns "cookievalue" of "cookie name"
    res.send("check the console")
})
```