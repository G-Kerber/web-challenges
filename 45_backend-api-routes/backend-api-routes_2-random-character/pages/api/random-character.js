import Chance from "chance";

const chance = new Chance();
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  geohash: chance.geohash(),
  gender: chance.gender(),
  address: chance.address(),
  phone: chance.phone(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
