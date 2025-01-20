export function getAnimal(animal) {
  let result = `I like ${animal}!`;
  if (animal === "cats") {
    result = "I totally love cats!";
  }
  if (animal === undefined) {
    result = "I do not like animals at all!";
  }
  return result;
}
