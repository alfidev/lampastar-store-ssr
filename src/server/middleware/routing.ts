import { Express } from "express";
import { renderReactAsync } from "server/ssr/renderReactAsync";

/** Defines the server routings. */
export function useRouting(app: Express) {
  app.get("/", async (req, res) => {
    try {
      console.log("dsvsdvs", req.url);
      const html = await renderReactAsync(req.url);
      return res.status(200).contentType("text/html").send(html);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
  });

  /**
   * put other routes here like:
   *
   * app.post("/foobar", (req, res) => {
   *
   *     ...stuff
   *
   * })
   *
   */
}
