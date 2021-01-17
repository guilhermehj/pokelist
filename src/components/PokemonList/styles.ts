import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import normalizeSize from '../../helpers/normalizeSize';
import { PokemonItemResponse } from '../../types/pokemon';

export const Container = styled(
  FlatList as new () => FlatList<PokemonItemResponse>
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Exo2_700Bold;
  padding-vertical: 4px;
  font-size: ${normalizeSize(34)}px;
`;
