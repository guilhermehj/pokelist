import useSWR, { useSWRInfinite } from 'swr';
import { getPokemonByName, getPokemons } from '../../services/pokemon';
import { PokemonItemResponse, PokemonsResponse } from '../../types/pokemon';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const usePokemonsSWR = () => {
  const { data, error, isValidating, size, setSize } = useSWRInfinite<
    PokemonItemResponse[]
  >(
    (index) => `/pokemon?limit=10&offset=${index * 10}`,
    async (url) => {
      const pokemons = await getPokemons(url);
      for (let i = 0; i < pokemons.results.length; i++) {
        pokemons.results[i].data = await getPokemonByName(
          pokemons.results[i].name
        );
      }
      await sleep(3000);
      return pokemons.results;
    }
  );
  const loading = !data && !error;

  return {
    results: data,
    setPage: setSize,
    page: size,
    loading,
  };
};
