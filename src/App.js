import React, { useState, useEffect } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import Pokemon from "./components/Pokemon";
import Stats from "./components/Stats";

function App() {
  useEffect(() => {
    randomPokemon();
  // eslint-disable-next-line
  }, []);

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ pokemon, setPokemon ] = useState({
    sprites: {},
    stats: [],
    types: []
  });

  const fetchPokemon = async (searchTerm) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    const pokemon = await data.json();
    
    setPokemon(pokemon);
  }

  const randomPokemon = () => {
    const randomPokemon = Math.floor(Math.random() * 891);
    console.log(randomPokemon);
    fetchPokemon(randomPokemon);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    if(!searchTerm) return;
    e.preventDefault();

    fetchPokemon(searchTerm);
    setSearchTerm("");

  }


  return (
    <div className="pokedex">
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm} />
      <div className="screen-container">
        <Pokemon pokemon={pokemon} />
      </div>
      <Stats pokemon={pokemon} />
      <div className="button-container">
      <button className="random-btn" onClick={randomPokemon}></button>
      <h4>Random</h4>
      </div>
    </div>
  );
}

export default App;
