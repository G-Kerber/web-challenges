import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, repsonse) => {
  if (request.url === "/api/fish/1") {
    repsonse.statusCode = 200;
    repsonse.end("Shrimp");
  } else if (request.url === "/api/fish/2") {
    repsonse.statusCode = 200;
    repsonse.end("Anemonefish");
  } else if (request.url === "/api/fish/3") {
    repsonse.statusCode = 200;
    repsonse.end("Pufferfish");
  } else {
    repsonse.statusCode = 400;
    repsonse.end("Not found");
  }
});
