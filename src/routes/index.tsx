import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import LoadingScreen from '../screens/LoadingScreen';
import PokeListScreen from '../screens/PokeListScreen';
import PokemonDetailsScreen from '../screens/PokemonDetails';
import { Pokemon } from '../types/pokemon';

export type RootStackParamList = {
  PokeList: undefined;
  Loading: undefined;
  PokemonDetails: { pokemon: Pokemon };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="PokeList"
      component={PokeListScreen}
      options={{
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
    />
    <Stack.Screen
      name="PokemonDetails"
      component={PokemonDetailsScreen}
      sharedElementsConfig={(route) => [
        { id: `pokemon-${route.params.pokemon.id}-image` },
      ]}
      options={{
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
    />
  </Stack.Navigator>
);

export default RootStack;
