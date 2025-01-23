export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map(
      (filterPerson) => `${filterPerson.firstName} ${filterPerson.lastName}`
    );
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => person.lastName === lastName)
    .map(
      (filteredPerson) =>
        `${filteredPerson.firstName} ${filteredPerson.lastName}`
    );
}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
