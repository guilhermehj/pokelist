import { TypesColorsMap } from '../constants/typesColorsMap';

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
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  stats: Stat[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
