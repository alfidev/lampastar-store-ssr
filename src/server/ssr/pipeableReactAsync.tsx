import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../../client/App';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import { HTML_TEMPLATE_PATH } from 'server/configuration';

export async function getPipeableAsync(req: Request, res: Response) {
  const helmetContext = { helmet: { title: '', meta: '' } };
  const errorContext = { error: { code: 0, message: '' } };

  const WrappedApp = (
    <StaticRouter location={req.originalUrl}>
      <App helmetContext={helmetContext} errorContext={errorContext} />
    </StaticRouter>
  );
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(WrappedApp);

  const staticHtmlContent = await fs.promises.readFile(HTML_TEMPLATE_PATH, {
    encoding: 'utf-8',
  });

  const [htmlStart, bodyStart, htmlEnd] = parseHtml(staticHtmlContent) as string[];

  const stream = renderToPipeableStream(jsx, {
    onShellReady() {
      const styleTags = sheet.getStyleTags();
      res.statusCode = errorContext.error.code || 200;
      res.setHeader('Content-type', 'text/html');

      res.write(
        htmlStart +
          styleTags +
          helmetContext?.helmet?.title?.toString() +
          helmetContext?.helmet?.meta?.toString() +
          bodyStart,
      );
      stream.pipe(res);
      res.write(htmlEnd);
      res.end();
    },
    onShellError() {
      // Something errored before we could complete the shell, so we emit an alternative shell.
      res.statusCode = 500;
      res.send('<!doctype html><h1>ERROR 500</h1>');
    },
    onError(err) {
      console.error(err);
    },
  });
}
// res: Response, stream: PipeableStream,
function parseHtml(templateHtml: string) {
  const pattern = /((\D|[0-9])+<head>)|((\D|[0-9])+<div\sid="root">)|(<(\D|[0-9])+\/html>)/g;

  return templateHtml.match(pattern);
}
