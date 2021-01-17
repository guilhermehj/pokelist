import { darken, lighten } from 'polished';
import styled from 'styled-components/native';

import typesColorsMap, { TypesColorsMap } from '../../constants/typesColorsMap';
import normalizeSize from '../../helpers/normalizeSize';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.23);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

export const PokemonName = styled.Text`
  font-size: ${normalizeSize(30)}px;
  text-transform: capitalize;
  text-align: center;
  font-family: Exo2_700Bold;
  margin-bottom: 10px;
`;

export interface TypeProp {
  type: keyof TypesColorsMap;
}

export const PokemonNumber = styled.Text<TypeProp>`
  font-size: ${normalizeSize(30)}px;
  text-transform: capitalize;
  text-align: center;
  font-family: Exo2_700Bold;
  margin-bottom: 10px;
  color: ${({ type }: TypeProp) =>
    darken(0.2, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const TypeBackground = styled.View<TypeProp>`
  height: ${normalizeSize(150)}px;
  width: ${normalizeSize(150)}px;
  position: absolute;
  align-self: center;
  border-radius: ${normalizeSize(75)}px;
  background-color: ${({ type }: TypeProp) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const StatLabel = styled.Text`
  font-family: Exo2_700Bold;
  font-size: ${normalizeSize(18)}px;
  text-transform: uppercase;
`;
export const StatValue = styled.Text`
  font-family: Exo2_400Regular;
  font-size: ${normalizeSize(20)}px;
`;

export const StatContainer = styled.View`
  margin-bottom: 5px;
`;

export const ProgressContainer = styled.View`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border-color: black;
  border-width: 1px;
  overflow: hidden;
`;

interface ProgressFillProps {
  max: number;
  value: number;
  color: string;
}

export const ProgressFill = styled.View<ProgressFillProps>`
  width: ${({ max, value }) => (value / max) * 100}%;
  background-color: ${({ color }) => darken(0.2, color)};
  height: 10px;
`;
