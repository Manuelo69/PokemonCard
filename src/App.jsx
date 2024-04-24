import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomPokemon = async () => {
    setLoading(true);
    const numRandom = Math.floor(Math.random() * 150) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${numRandom}`
    );
    const data = await response.json();
    setPokemon(data);
    setLoading(false);
  };

  const handleRandomPokemon = () => {
    if (!loading) {
      getRandomPokemon();
    }
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

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
        disabled={loading}
      >
        {loading ? "Cargando..." : "Nuevo Pokémon"}
      </button>
    </div>
  );
}

export default App;
