import React, { useEffect } from 'react';
import {
  Platform,
  useWindowDimensions,
  StatusBar,
  Pressable,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';
import { darken, lighten } from 'polished';

import PokemonDetails from '../../components/PokemonDetails';
import typesColorsMap from '../../constants/typesColorsMap';
import { RootStackParamList } from '../../routes';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>;

const PokemonDetailsScreen = ({ route, navigation }: Props) => {
  const { params } = route;
  const { pokemon } = params;
  if (!pokemon) return null;
  const type = pokemon.types[0].type.name;
  const { width } = useWindowDimensions();
  const bgColor = typesColorsMap[type] || typesColorsMap.normal;

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor(bgColor, true);
    }
    return () => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('#fff', true);
      }
    };
  }, []);

  return (
    <LinearGradient
      colors={[bgColor, lighten(0.18, bgColor)]}
      locations={[0.5, 0.9]}
      style={{
        flex: 1,
        paddingTop: 30,
      }}
    >
      <Pressable
        onPress={navigation.goBack}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <AntDesign
          name={'left'}
          size={26}
          color={darken(0.28, bgColor)}
          style={{
            marginLeft: 10,
          }}
        />
      </Pressable>
      <PokemonDetails pokemon={pokemon} />
    </LinearGradient>
  );
};

export default PokemonDetailsScreen;
