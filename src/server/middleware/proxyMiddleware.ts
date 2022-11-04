import proxy from 'express-http-proxy';
import { PROXY_SERVER_URL } from 'server/configuration';

export const proxyMiddleware = PROXY_SERVER_URL ? proxy(PROXY_SERVER_URL) : 'https://serv.lampastar.ru';