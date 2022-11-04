import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ override: true });

export const PORT = process.env.PORT ?? 9000;

export const USE_HTTPS = process.env.HTTPS === 'true';
export const USE_REDIRECT_HTTPS = process.env.USE_REDIRECT_HTTPS === 'true';

export const OPTIONS =
  USE_HTTPS && process.env.KEY_PATH && process.env.CRT_PATH
    ? {
        key: fs.readFileSync(process.env.KEY_PATH),
        cert: fs.readFileSync(process.env.CRT_PATH),
      }
    : {};

export const PUBLIC_DIR_PATH = process.env.PUBLIC_DIR_PATH ?? path.join(__dirname, 'public');

export const HTML_TEMPLATE_PATH = process.env.HTML_TEMPLATE_PATH ?? path.join(__dirname, 'public', 'index.html');

export const PROXY_SERVER_URL = process.env.PROXY_SERVER_URL;
