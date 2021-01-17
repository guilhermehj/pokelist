import useSWR from 'swr';

import { getPokemonByName } from '../../services/pokemon';

export const usePokemonSWR = (name: string) => {
  const { data, error } = useSWR(`pokemons-${name}`, () =>
    getPokemonByName(name)
  );

  const loading = !data && !error;

  return {
    pokemon: data,
    loading,
  };
};
