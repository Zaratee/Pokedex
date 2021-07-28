import { gql, useQuery } from "@apollo/client";

const GET_POKEMON = gql`
  query PokemonInfo($pokemon: String!) {
    pokemon(name: $pokemon) {
      name
      number
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        name
        image
      }
    }
  }
`;

const usePokedex = (pokemonName) => {
  const result = useQuery(GET_POKEMON, {
    variables: {
      pokemon: pokemonName
    }
  });

  return result;
};

export default usePokedex;
