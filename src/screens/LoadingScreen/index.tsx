import React from 'react';

import LoadingAnimation from '../../animations/Loading';
import {usePokemonsSWR} from '../../components/PokemonList/swr';

const LoadingScreen = () => {
  const {loading} = usePokemonsSWR();
  return <LoadingAnimation loading={loading} />;
};

export default LoadingScreen;
