import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pagePrev, setPagePrev] = useState();
  const [pageNext, setPageNext] = useState();
  const limit = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPagePrev(data.previous);
        setPageNext(data.next);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setOffset(offset - limit)}
        disabled={pagePrev === null ? true : false}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setOffset(offset + limit)}
        disabled={pageNext === null ? true : false}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
