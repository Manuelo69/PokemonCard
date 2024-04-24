import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getRandomPokemon = async () => {
      const numRandom = Math.floor(Math.random() * 150) + 1; // Asegúrate de que el número aleatorio esté dentro del rango válido
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numRandom}`
      );
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };

    getRandomPokemon();
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez, al montarse el componente

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
    </div>
  );
}

export default App;
