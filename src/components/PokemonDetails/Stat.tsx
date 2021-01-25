import React from 'react';
import {View} from 'react-native';
import AnimateableText from 'react-native-animateable-text';
import {
  concat,
  interpolate,
  Extrapolate,
  floor,
  Easing,
} from 'react-native-reanimated';
import {useTimingTransition} from 'react-native-redash';

import normalizeSize from '../../helpers/normalizeSize';
import {Stat} from '../../types/pokemon';
import {
  ProgressContainer,
  ProgressFill,
  StatContainer,
  StatLabel,
} from './styles';

interface Props {
  stat: Stat;
  color: string;
}

const maxStats = {
  hp: 300,
  attack: 200,
  defense: 250,
  'special-attack': 200,
  'special-defense': 250,
  speed: 200,
};

const PokemonStat: React.FC<Props> = ({stat, color}) => {
  const animation = useTimingTransition(true, {
    duration: 500,
    easing: Easing.cubic,
  });
  const animatedBaseStat = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [0, stat.base_stat],
    extrapolate: Extrapolate.CLAMP,
  });
  const max = maxStats[stat.stat.name];
  const progress = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [0, (stat.base_stat / max) * 100],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <StatContainer>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <StatLabel>{`${stat.stat.name.replace('-', ' ')}`}</StatLabel>
        <View style={{flexDirection: 'row'}}>
          <AnimateableText
            text={concat(
              floor(animatedBaseStat),
              `/${maxStats[stat.stat.name]}`,
            )}
            style={{
              fontFamily: 'Exo2-Bold',
              fontSize: normalizeSize(18),
              lineHeight: normalizeSize(20),
            }}
          />
        </View>
      </View>
      <ProgressContainer>
        <ProgressFill
          color={color}
          style={{
            width: concat(progress, '%'),
          }}
        />
      </ProgressContainer>
    </StatContainer>
  );
};
export default PokemonStat;
