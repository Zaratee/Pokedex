import React from "react";
import "../App.css";
const PokeCardEvolution = ( props ) => {
    const {pokemonEvolutions} = props;
    const {setPokemon} = props;
  return (
      <div>
            <h2>Evolutions</h2>
        <div className="card-container-row margin-top  margin-bottom justify-content-evenly">
            {
                pokemonEvolutions.map((pokemon,index) => 
        <div className="card-container-col" >         
            <div className="card" onClick={()=> setPokemon(pokemonEvolutions[index].name)}>
                <h4 className="pokemon-id">
                    {pokemon.name}
                </h4>
                <img src={pokemon.image} alt="pokemon" className="pokemon-img"/>
            
            </div>
        </div>
        
        
                )
            }
        </div>
      </div>
          
  );
};

export default PokeCardEvolution;