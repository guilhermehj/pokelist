import React from 'react';

import { useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonList from '../../components/PokemonList';

const PokeListScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PokemonList />
      </SafeAreaView>
    </View>
  );
};

export default PokeListScreen;
