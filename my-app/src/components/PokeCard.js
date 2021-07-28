import React from "react";
import "../App.css";
const PokeCard = ({ pokemon }) => {
  return (
    <div className="card-container-row">
      <div className="card-container-col">
        <div className="pokemon-card">
          <h2 className="pokemon-id">
            {pokemon.name} ({pokemon.number})
          </h2>
          <img src={pokemon.image} alt="pokemon" className="pokemon-img"/>
          <div className="table-container">
          <table className="table-stats">
            <thead>
              <tr>
                <th>Ability</th>
                <th>Type</th>
                <th>Damage</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.attacks.special.map((attack, i) => (
                <tr key={i}>
                  <td>{attack.name}</td>
                  <td>{attack.type}</td>
                  <td>{attack.damage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PokeCard;