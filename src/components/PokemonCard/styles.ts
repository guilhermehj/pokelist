import {Pressable, PressableProps, TextProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

import {darken, lighten} from 'polished';
import styled from 'styled-components/native';

import typesColorsMap, {TypesColorsMap} from '../../constants/typesColorsMap';
import Typography, {TypographyProps} from '../../elements/Typography';
import normalizeSize from '../../helpers/normalizeSize';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface ContainerProps extends PressableProps {
  type: keyof TypesColorsMap;
}

export const Container = styled(AnimatedPressable)<ContainerProps>`
  margin-vertical: ${normalizeSize(10)}px;
  border-radius: ${normalizeSize(15)}px;
  background-color: ${({type}: ContainerProps) =>
    typesColorsMap[type] || typesColorsMap.normal};
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-offset: 0px 0px;
  shadow-radius: 3.84px;
  width: 100%;
  flex-direction: row;
  align-self: flex-end;
`;

export const PokemonImage = styled(FastImage).attrs({resizeMode: 'contain'})``;

export interface TypeCircleProps {
  type: keyof TypesColorsMap;
}

export const TypeBackground = styled.View<TypeCircleProps>`
  height: ${normalizeSize(150)}px;
  width: ${normalizeSize(150)}px;
  left: -20px;
  bottom: -25px;
  border-radius: ${normalizeSize(75)}px;
  background-color: ${({type}: ContainerProps) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const PokemonNumber = styled(Typography).attrs({
  modifiers: ['bold'],
})<TypeCircleProps>`
  border-radius: ${normalizeSize(75)}px;
  position: absolute;
  right: 10px;
  bottom: 0;
  color: ${({type}: ContainerProps) =>
    darken(0.3, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const PokemonName = styled(Typography).attrs({
  modifiers: ['capitalize', 'bold'],
})`
  flex-wrap: wrap;
  flex: 1;
`;

export const ContentContainer = styled.View`
  border-radius: ${normalizeSize(15)}px;
  flex-direction: row;
  overflow: hidden;
  padding: ${normalizeSize(5)}px;
  flex: 1;
`;

interface PokemonTypeProps extends TypographyProps {
  type: keyof TypesColorsMap;
}

export const PokemonType = styled(Typography).attrs({
  modifiers: ['capitalize', 'tag', 'center', 'bold'],
})<PokemonTypeProps>`
  color: white;
  border-radius: 20px;
  width: ${normalizeSize(80)}px;
  margin-bottom: ${normalizeSize(8)}px;
  padding-vertical: ${normalizeSize(4)}px;
  background-color: ${({type}: ContainerProps) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const InfoContainer = styled.View`
  flex: 1;
`;
