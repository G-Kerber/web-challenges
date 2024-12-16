console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("entire data object_", data);
  console.log("R2-D2_", data.results[2]);
  const name = "R2-D2";
  const parttimeVar = data.results.find((character) => {
    return character.name === name;
  });
  console.log(parttimeVar.eye_color);
}

fetchData();
