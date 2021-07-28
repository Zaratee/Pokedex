import '../App.css'
import React, { useState } from 'react';

function InputPokemon(props){
    const [pokemon, setPokemon] = useState('');
    const {getInput} = props
    const onSumbit = () => {
        if(pokemon.trim() === '') return;
        getInput(pokemon);
        setPokemon('');
    }

    return (
        <div className="input-container">
            <input className="input-search" value={pokemon} onInput={ e => setPokemon(e.target.value)} placeholder="Pokémon name..."></input>
            <div className="success-button" onClick={onSumbit} >Go!</div>
        </div>
    )
}
export default InputPokemon;