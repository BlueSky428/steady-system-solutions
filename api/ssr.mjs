import server from "../dist/server/server.js";

// Vercel Node functions expect a default export with a `fetch` method (Web Handler shape),
// not a bare function — otherwise the handler may never run and the browser gets an empty body.
export default {
  fetch(request, env, ctx) {
    return server.fetch(request, env ?? process.env, ctx ?? {});
  },
};
