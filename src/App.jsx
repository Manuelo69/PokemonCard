import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getRandomPokemon();
  }, []);

  const getRandomPokemon = async () => {
    const numRandom = Math.floor(Math.random() * 150) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${numRandom}`
    );
    const data = await response.json();
    setPokemon(data);
  };

  const handleRandomPokemon = () => {
    getRandomPokemon();
  };

  return (
    <div className="App">
      {pokemon && (
        <PokemonCard
          sprite={pokemon.sprites.front_default}
          name={pokemon.name}
          hp={pokemon.stats[0].base_stat}
          exp={pokemon.base_experience}
          attack={pokemon.stats[1].base_stat}
          specialAttack={pokemon.stats[3].base_stat}
          defense={pokemon.stats[2].base_stat}
        />
      )}
      <button
        onClick={handleRandomPokemon}
        className="mt-5 shadow-xl border border-black overflow-hidden"
      >
        Recargar
      </button>
    </div>
  );
}

export default App;
