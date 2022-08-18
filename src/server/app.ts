import { createServer } from "server/server";
import {
  OPTIONS,
  PORT,
  USE_HTTPS,
  USE_REDIRECT_HTTPS,
} from "server/configuration";
import https from "https";
import http from "http";
import express from "express";

const server = createServer();

console.log(USE_REDIRECT_HTTPS);

if (USE_REDIRECT_HTTPS) {
  const httpServer = express();

  httpServer.get("*", function (req, res) {
    res.redirect("https://" + req.headers.host + req.url);
  });
  httpServer.listen(80);
}

if (USE_HTTPS) {
  https.createServer(OPTIONS, server).listen(PORT);
} else {
  http.createServer(server).listen(PORT);
}
