import { createServer } from "node:http";
import Chance from "chance";

var chance = new Chance();

const name = chance.name({
  middle_initial: true,
  prefix: true,
  nationality: "en",
});
const age = chance.integer({ min: 20, max: 80 });
const profession = chance.profession();

// export const server = …
export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
