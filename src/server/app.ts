import { createServer } from "server/server";
import { OPTIONS, PORT, USE_HTTPS } from "server/configuration";
import https from "https";
import http from "http";

const server = createServer();

if (USE_HTTPS) {
  https.createServer(OPTIONS, server).listen(PORT);
} else {
  http.createServer(server).listen(PORT);
}
