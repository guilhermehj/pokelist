import React from 'react';
import {interpolate, Extrapolate} from 'react-native-reanimated';
import {useScrollHandler} from 'react-native-redash';

import {Move} from '../../../types/pokemon';
import PokemonMove from './Move';
import {MovesContainer} from './styles';

interface Props {
  moves: Move[];
  typeColor: string;
}

const PokemonMoves: React.FC<Props> = ({moves, typeColor}) => {
  const {y, scrollHandler} = useScrollHandler();

  return (
    <MovesContainer {...scrollHandler}>
      {moves.map((move, index) => (
        <PokemonMove
          key={move.move.name}
          move={move}
          y={y}
          index={index}
          color={typeColor}
        />
      ))}
    </MovesContainer>
  );
};

export default PokemonMoves;
