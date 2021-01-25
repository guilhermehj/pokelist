import React, {useEffect} from 'react';
import {
  Platform,
  useWindowDimensions,
  StatusBar,
  Pressable,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import {StackScreenProps} from '@react-navigation/stack';

import {darken, lighten} from 'polished';

import PokemonDetails from '../../components/PokemonDetails';
import {
  ImageContainer,
  PokemonName,
  PokemonNumber,
} from '../../components/PokemonDetails/styles';
import ScreenHeader from '../../components/ScreenHeader';
import typesColorsMap from '../../constants/typesColorsMap';
import normalizeSize from '../../helpers/normalizeSize';
import {RootStackParamList} from '../../routes';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>;

const PokemonDetailsScreen = ({route, navigation}: Props) => {
  const {params} = route;
  const {pokemon} = params;
  if (!pokemon) return null;
  const type = pokemon.types[0].type.name;
  const {width} = useWindowDimensions();
  const bgColor = typesColorsMap[type] || typesColorsMap.normal;

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(bgColor, true);
      StatusBar.setBarStyle('light-content');
    }
    return () => {
      if (Platform.OS === 'android') {
        console.log('out');
        StatusBar.setBackgroundColor('whitesmoke', true);
        StatusBar.setBarStyle('dark-content');
      }
    };
  }, []);

  return (
    <LinearGradient
      colors={[bgColor, lighten(0.18, bgColor)]}
      locations={[0.5, 0.9]}
      style={{
        flex: 1,
      }}>
      <ScreenHeader
        onBackPress={navigation.goBack}
        center={<PokemonName>{pokemon.name}</PokemonName>}
        right={
          <PokemonNumber type={type}>{`Nº${String(pokemon.id).padStart(
            3,
            '0',
          )}`}</PokemonNumber>
        }
      />
      <PokemonDetails pokemon={pokemon} />
    </LinearGradient>
  );
};

export default PokemonDetailsScreen;
