import React from "react";
import App from "client/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import { HTML_TEMPLATE_PATH } from "server/configuration";
import { ServerStyleSheet } from "styled-components";

/**
 * Renders the react App as a html string.
 * @param url The render url. It will be injected in the react router so it can render the corresponding route.
 * @param context
 * @returns A html string;
 */
export async function renderReactAsync(
  url: string,
  context?: {
    error: {
      code: number;
      message: string;
    };
  }
) {
  // read the html template file

  const staticHtmlContent = await fs.promises.readFile(HTML_TEMPLATE_PATH, {
    encoding: "utf-8",
  });

  const helmetContext = {};

  const WrappedApp = (
    <StaticRouter location={url}>
      <App context={context} helmetContext={helmetContext} />
    </StaticRouter>
  );

  const [reactContent, styleTags] = renderToStringWithStyles(WrappedApp);

  const { helmet = {} } = helmetContext as {
    helmet?: { title?: ""; meta?: "" };
  };

  // finally combine all parts together

  return buildHtml(staticHtmlContent, reactContent, styleTags, helmet);
}

function buildHtml(
  templateHtml: string,
  reactHtml: string,
  styleTags: string,
  helmet: any
) {
  const pattern = /(?<head><head>)|(?<root><div\sid="root">)/g;

  return templateHtml.replace(pattern, (match, ...params: any[]) => {
    const groups = params.pop();

    if (groups.head)
      return (
        groups.head +
        styleTags +
        helmet.title.toString() +
        helmet.meta.toString()
      );
    if (groups.root) return groups.root + reactHtml;

    return match;
  });
}

function renderToStringWithStyles(component: JSX.Element) {
  const sheet = new ServerStyleSheet();
  try {
    const reactHtml = renderToString(sheet.collectStyles(component));
    const styleTags = sheet.getStyleTags();
    return [reactHtml, styleTags];
  } finally {
    sheet.seal();
  }
}
