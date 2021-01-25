import React from 'react';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

import {lighten} from 'polished';

import normalizeSize from '../../../helpers/normalizeSize';
import {Move} from '../../../types/pokemon';
import {MoveContainer, MoveName} from './styles';

interface Props {
  move: Move;
  y: Animated.Node<number>;
  index: number;
  color: string;
}

const PokemonMove: React.FC<Props> = ({move, y, index, color}) => {
  const moveName = move.move.name.replace('-', ' ');
  const start = index * 200;
  const opacity = interpolate(y, {
    inputRange: [start - 200, start, start + 30],
    outputRange: [0.5, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(y, {
    inputRange: [start, start + 50],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <MoveContainer
      style={{
        backgroundColor: lighten(0.1, color),
        opacity,
        transform: [{scale}],
      }}>
      <MoveName>{moveName}</MoveName>
    </MoveContainer>
  );
};

export default PokemonMove;
