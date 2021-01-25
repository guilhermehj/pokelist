import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

import {darken} from 'polished';
import styled from 'styled-components/native';

import typesColorsMap, {TypesColorsMap} from '../../constants/typesColorsMap';
import Typography, {TypographyProps} from '../../elements/Typography';
import normalizeSize from '../../helpers/normalizeSize';

const {width} = Dimensions.get('window');

export const Container = styled(Animated.ScrollView).attrs({
  horizontal: true,
  overScrollMode: 'never',
  decelerationRate: 'fast',
  snapToInterval: width,
  contentContainerStyle: {
    paddingTop: normalizeSize(20),
  },
})`
  flex: 1;
`;

export const PokemonName = styled(Typography).attrs({
  modifiers: ['capitalize', 'bold', 'center'],
})`
  align-self: center;
  width: 100%;
`;

export interface TypeProp extends TypographyProps {
  type: keyof TypesColorsMap;
}

export const PokemonNumber = styled(Typography).attrs({
  modifiers: ['bold'],
})<TypeProp>`
  color: ${({type}: TypeProp) =>
    darken(0.2, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const StatLabel = styled(Typography).attrs({
  modifiers: ['bold', 'tag', 'uppercase'],
})``;

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
  color: string;
}

export const ProgressFill = styled(Animated.View)<ProgressFillProps>`
  border-radius: 5px;
  background-color: ${({color}) => darken(0.2, color)};
  height: 9px;
`;

export const ImageContainer = styled.View``;
