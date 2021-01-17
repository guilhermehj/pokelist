import React, { useCallback } from 'react';

import LoadingMore from '../../animations/ListLoadingMore';
import LoadingAnimation from '../../animations/Loading';
import { PokemonItemResponse } from '../../types/pokemon';
import PokemonItem from '../PokemonCard';
import { Container, Title } from './styles';
import { usePokemonsSWR } from './swr';

const PokemonList = () => {
  const { results, page, setPage, loading } = usePokemonsSWR();

  const isLoadingMore =
    loading ||
    (page > 0 && results && typeof results[page - 1] === 'undefined');

  const renderItem = useCallback(
    ({ item, index }: { item: PokemonItemResponse; index: number }) => (
      <PokemonItem
        key={item.name}
        name={item.name}
        data={item.data}
        index={index}
      />
    ),
    []
  );

  const renderFooter = useCallback(() => {
    if (isLoadingMore) {
      return <LoadingMore />;
    }
    return null;
  }, [isLoadingMore]);

  const renderHeader = useCallback(() => <Title>Pokedex</Title>, []);

  const keyExtractor = useCallback(
    (item: PokemonItemResponse) => item.name,
    []
  );

  const onEndReached = useCallback(() => {
    if (!isLoadingMore) {
      setPage((size) => size + 1);
    }
  }, [setPage, isLoadingMore]);

  const pokemons: PokemonItemResponse[] = results
    ? ([] as PokemonItemResponse[]).concat(...results)
    : [];

  return (
    <>
      <Container
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={1}
        onEndReached={onEndReached}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
      <LoadingAnimation loading={loading} />
    </>
  );
};

export default PokemonList;
