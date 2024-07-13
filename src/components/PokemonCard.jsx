import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonData(response.data);
    };
    fetchPokemonData();
  }, [pokemon.url]);

  return (
    pokemonData && (
      <div className="pokemon-card">
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h2>{pokemonData.name}</h2>
      </div>
    )
  );
};

export default PokemonCard;
