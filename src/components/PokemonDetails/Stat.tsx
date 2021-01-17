import React from 'react';

import { Stat } from '../../types/pokemon';
import {
  StatContainer,
  StatLabel,
  ProgressContainer,
  ProgressFill,
} from './styles';

interface Props {
  stat: Stat;
  color: string;
}

const PokemonStat: React.FC<Props> = ({ stat, color }) => (
  <StatContainer>
    <StatLabel>{`${stat.stat.name.replace('-', ' ')}`}</StatLabel>
    <ProgressContainer>
      <ProgressFill max={300} value={stat.base_stat} color={color} />
    </ProgressContainer>
  </StatContainer>
);

export default PokemonStat;
