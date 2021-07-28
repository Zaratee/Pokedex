import PokeCard from "./components/PokeCard";
import PokeCardEvolution from "./components/PokeCardEvolution";
import usePokedex from "./graphql-api/usePokedex";
import InputPokemon from "./components/InputPokemon"
import Loading from "./components/Loading"
import PageNotFound from "./components/PageNotFound"
import React, { useState, useEffect } from 'react';
import "./App.css";

/**
 *  1. Implement an input field to search a pokemon by its name
 *  2. When loading flag is true, show a loading component
 *  3. When pokemon response is empty, show a not found card component
 *  4. If the pokemon has evolutions show them.
 *  5. When user clicks on a evolution update the PokeCard
 *  5. Test you application
 *
 *  NOTE: DO NOT change PokeCard component and usePokedex hook
 */

export default function App() {
  /**
   * usePokedex will return same result as apollograhpql useQuery hook
   * see https://www.apollographql.com/docs/react/api/react/hooks/#result
   */
  document.body.style = `
  background-image: url('https://www.wallpaperflare.com/static/933/827/743/pok%C3%A9mon-pixel-art-green-grass-wallpaper.jpg');
  background-size: cover;`;

  const [pokemon, setPokemon] = useState('');
  const result = usePokedex(pokemon);
  console.log("data", result.data);
  const setPokemonToSearch = input => {
    setPokemon(input);
  }

  return (
    <div className="App">
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" className="pokemon-logo-img"></img>
      </div>
      {
        !result.loading? 
        <div>
          {
            pokemon == ''  ?
          <InputPokemon getInput={setPokemonToSearch}/>:''
          }

          {result.data && result.data.pokemon && (
            <div>
              <PokeCard pokemon={result.data.pokemon} />
              
            </div>
          )}

          {result.data?.pokemon == null && pokemon !== '' ? (
            <PageNotFound setDefault={setPokemonToSearch}/>
          ):''
          }

          {result.data &&
            result.data.pokemon &&
            result.data.pokemon.evolutions &&(
              <PokeCardEvolution pokemonEvolutions={result.data.pokemon.evolutions}/>) 
            // JSON.stringify(result.data.pokemon.evolutions)
            }
            {result.data && result.data.pokemon && (
            <div className="center-flex">
                <div className="info-button btn-md" onClick={() => setPokemon('')}> Back</div>
              </div>
              )}
        </div>:<Loading/>
       
      }
    </div>
  );
}
