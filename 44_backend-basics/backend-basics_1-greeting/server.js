import { createServer } from "node:http";

// export const server = …
const username = "Gunnar";
export const server = createServer((request, response) => {
  if (request.url === "/1") {
    response.statusCode = 200;
    response.end("Hello World");
  } else {
    response.statusCode = 200;
    response.end(`Hello, ${username}!`);
  }
});
