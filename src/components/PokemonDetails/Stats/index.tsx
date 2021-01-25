import React from 'react';

import {Stat} from '../../../types/pokemon';
import PokemonStat from '../Stat';
import {Container} from './styles';

interface Props {
  stats: Stat[];
  typeColor: string;
}

const PokemonStats: React.FC<Props> = ({stats, typeColor}) => {
  return (
    <Container>
      {stats.map((stat) => (
        <PokemonStat key={stat.stat.name} stat={stat} color={typeColor} />
      ))}
    </Container>
  );
};

export default PokemonStats;
