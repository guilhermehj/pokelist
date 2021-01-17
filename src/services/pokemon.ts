import { AxiosResponse } from 'axios';
import api from './api.config';
import { Pokemon, PokemonsResponse } from '../types/pokemon';

const getPokemons = (url: string): Promise<PokemonsResponse> =>
  api
    .get<any, AxiosResponse<PokemonsResponse>>(url)
    .then((response) => response.data);

const getPokemonByName = (name: string): Promise<Pokemon> =>
  api
    .get<any, AxiosResponse<Pokemon>>(`/pokemon/${name}`)
    .then((response) => response.data);

export { getPokemons, getPokemonByName };
