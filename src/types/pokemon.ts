import {TypesColorsMap} from '../constants/typesColorsMap';

export interface PokemonItemResponse {
  name: string;
  url: string;
  data?: Pokemon;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonItemResponse[];
}

export interface Type {
  slot: number;
  type: {
    name: keyof TypesColorsMap;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name:
      | 'hp'
      | 'attack'
      | 'defense'
      | 'special-attack'
      | 'special-defense'
      | 'speed';
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  stats: Stat[];
  moves: Move[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
