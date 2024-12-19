/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

//export const getNameAndCountry = ({ name, country }) => [name, country];
export function getNameAndCountry(city) {
  return [city.name, city.country];
}

//export const getRelocatedCity = (
//  city1,
//  city2 = { name: "Berlin", country: "Germany" }
//) =>
export function getRelocatedCity(city1, city2) {
  //const [, country] = getNameAndCountry(city2);
  const country = getNameAndCountry(city2)[1];

  //return {
  //  ...city1,
  //  country,
  //};
  const city = getNameAndCountry(city1)[0];
  const relocatedCity = { city, country };
  return relocatedCity;
}

const city3 = { name: "Wiesbaden", country: "Hessen" };
const city4 = { name: "Stuttgart", country: "BW" };
const cityIsRelocated = getRelocatedCity(city3, city4);
console.log(cityIsRelocated);
