import path from "path";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ override: true });

export const PORT = process.env.PORT ?? 9000;

export const USE_HTTPS = Boolean(process.env.HTTPS);
export const USE_REDIRECT_HTTPS = Boolean(process.env.USE_REDIRECT_HTTPS);

export const OPTIONS = USE_HTTPS
  ? {
      key: fs.readFileSync("certificates/cert.key"),
      cert: fs.readFileSync("certificates/cert.crt"),
    }
  : {};

export const PUBLIC_DIR_PATH =
  process.env.PUBLIC_DIR_PATH ?? path.join(__dirname, "public");

export const HTML_TEMPLATE_PATH =
  process.env.HTML_TEMPLATE_PATH ??
  path.join(__dirname, "public", "index.html");
