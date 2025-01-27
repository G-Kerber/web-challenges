import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
const URL = "/api/random-character";

export default function HomePage() {
  const { data: character, isLoading, isError } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error loading character.</h1>;
  }
  if (!character) {
    return <h2>No character found.</h2>;
  }

  return (
    <>
      <h1>Hello from Next.js!</h1>
      <h2>Zugriff auf einzelen Objektelemente</h2>
      <div>
        <p>First Name: {character.firstName}</p>
        <p>Last Name: {character.lastName}</p>
        <p>Geohash: {character.geohash}</p>
        <p>Gender: {character.gender}</p>
        <p>Address: {character.address}</p>
        <p>Phone: {character.phone}</p>
      </div>
      <h2>Zugriff über Objekt in String umwandeln</h2>
      <div>{JSON.stringify(character)}</div>
    </>
  );
}
