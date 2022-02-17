import axios from 'axios';
import { Pokemon } from '../interfaces';

export const getPokemon = async (pokemon: number): Promise<Pokemon> => {
  const resp = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  console.log(resp.data.abilities[0].ability.name);
  console.log(resp.data.abilities);
  return resp.data;
};
