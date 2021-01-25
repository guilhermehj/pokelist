import React from 'react';
import {ScrollView, useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {useScrollHandler} from 'react-native-redash';
import {SharedElement} from 'react-navigation-shared-element';

import {lighten} from 'polished';

import typesColorsMap from '../../constants/typesColorsMap';
import normalizeSize from '../../helpers/normalizeSize';
import {Pokemon} from '../../types/pokemon';
import typesBgMap from '../PokemonTypes/map';
import PokemonMoves from './Moves';
import PokemonMove from './Moves/Move';
import PokemonStat from './Stat';
import PokemonStats from './Stats';
import {Container, ImageContainer} from './styles';

interface Props {
  pokemon: Pokemon;
}

const PokemonDetails: React.FC<Props> = ({pokemon}) => {
  const type = pokemon.types[0].type.name;
  const {height, width} = useWindowDimensions();
  const {scrollHandler, x} = useScrollHandler();
  const typeColor = lighten(0.1, typesColorsMap[type] || typesColorsMap.normal);

  const PokemonTypeBg = typesBgMap[type];
  const translateX = interpolate(x, {
    inputRange: [0, width * 5],
    outputRange: [0, -width],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          transform: [{translateX}],
        }}>
        <PokemonTypeBg size={height} color={typeColor} />
      </Animated.View>
      <ImageContainer>
        <SharedElement
          id={`pokemon-${pokemon.id}-image`}
          style={{
            alignItems: 'center',
          }}>
          <FastImage
            source={{
              uri: pokemon.sprites.other['official-artwork'].front_default,
            }}
            resizeMode="contain"
            style={{
              height: normalizeSize(260),
              width: normalizeSize(300),
            }}
          />
        </SharedElement>
      </ImageContainer>
      <Container {...scrollHandler}>
        <PokemonStats stats={pokemon.stats} typeColor={typeColor} />
        <PokemonMoves moves={pokemon.moves} typeColor={typeColor} />
      </Container>
    </View>
  );
};

export default PokemonDetails;
