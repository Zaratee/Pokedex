import React from "react";
import "../App.css";
const PokeCardEvolution = ( props ) => {
    const {pokemonEvolutions} = props;

    console.log('evolution',pokemonEvolutions)
  return (
      <div>
            <h2>Evolutions</h2>
        <div className="card-container-row margin-top  margin-bottom justify-content-evenly">
            {
                pokemonEvolutions.map((pokemon) => 
        <div className="card-container-col">         
            <div className="card">
            <h2 className="pokemon-id">
                {pokemon.name}
            </h2>
            <img src={pokemon.image} alt="pokemon" className="pokemon-img"/>
            <div className="table-container">
            </div>
            </div>
        </div>
        
        
                )
            }
        </div>
      </div>
          
  );
};

export default PokeCardEvolution;