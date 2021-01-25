import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {interpolate} from 'react-native-reanimated';
import {useValue, withTransition} from 'react-native-redash';
import {SharedElement} from 'react-navigation-shared-element';

import {useNavigation} from '@react-navigation/native';

import normalizeSize from '../../helpers/normalizeSize';
import {Pokemon} from '../../types/pokemon';
import {
  Container,
  ContentContainer,
  PokemonImage,
  PokemonName,
  TypeBackground,
  PokemonNumber,
  InfoContainer,
  PokemonType,
} from './styles';

interface Props {
  name: string;
  index: number;
  data?: Pokemon;
}

const PokemonItem = ({name, data}: Props) => {
  const navigation = useNavigation();
  const pressed = useValue<0 | 1>(0);
  const pressTransition = withTransition(pressed);
  const onPress = useCallback(() => {
    navigation.navigate('PokemonDetails', {pokemon: data});
  }, []);

  const elevation = interpolate(pressTransition, {
    inputRange: [0, 1],
    outputRange: [13, 2],
  });

  const scale = interpolate(pressTransition, {
    inputRange: [0, 1],
    outputRange: [1, 0.93],
  });

  const type = data ? data.types[0].type.name : 'normal';
  const uri = data?.sprites.other['official-artwork'].front_default;
  return (
    <Container
      type={type}
      style={{elevation, transform: [{scale}]}}
      onPress={onPress}
      onPressIn={() => pressed.setValue(1)}
      onPressOut={() => pressed.setValue(0)}>
      {data != null && (
        <SharedElement
          id={`pokemon-${data.id}-image`}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: -25,
            top: -10,
          }}>
          {uri && (
            <FastImage
              source={{
                uri,
              }}
              style={{
                height: normalizeSize(180),
                width: normalizeSize(180),
              }}
            />
          )}
        </SharedElement>
      )}
      {data != null && (
        <ContentContainer>
          <TypeBackground type={type} />
          <InfoContainer>
            <PokemonName>{name}</PokemonName>
            {data.types?.map((pokeType) => (
              <PokemonType key={pokeType.type.name} type={pokeType.type.name}>
                {pokeType.type.name}
              </PokemonType>
            ))}
            <PokemonNumber type={type}>{`Nº${String(data.id).padStart(
              3,
              '0',
            )}`}</PokemonNumber>
          </InfoContainer>
        </ContentContainer>
      )}
    </Container>
  );
};

export default React.memo(PokemonItem);
