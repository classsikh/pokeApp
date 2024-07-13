import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setPokemons(response.data.results);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <div className="head">
      
        <h1><img src="vite.svg" alt="logo"></img>PokéApp</h1>
        
       
       <SearchBox
          placeholder="Search Pokémon"
          handleChange={(e) => setSearchField(e.target.value)}
        />
      </div>
 
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
