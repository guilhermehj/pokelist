import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import Typography from '../../../elements/Typography';
import normalizeSize from '../../../helpers/normalizeSize';

const {width} = Dimensions.get('window');

export const MovesContainer = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  overScrollMode: 'never',
  snapToInterval: normalizeSize(200) + normalizeSize(8),
  contentContainerStyle: {
    paddingTop: normalizeSize(8),
    paddingHorizontal: normalizeSize(16),
  },
})`
  width: ${width}px;
`;

export const MoveContainer = styled(Animated.View)`
  height: ${normalizeSize(200)}px;
  border-radius: ${normalizeSize(10)}px;
  margin-bottom: ${normalizeSize(8)}px;
  padding-vertical: ${normalizeSize(16)}px;
  padding-horizontal: ${normalizeSize(16)}px;
  elevation: 10;
`;

export const MoveName = styled(Typography).attrs({
  modifiers: ['bold', 'h2', 'capitalize'],
})``;
