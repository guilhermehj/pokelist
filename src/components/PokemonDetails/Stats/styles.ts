import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

import normalizeSize from '../../../helpers/normalizeSize';
const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  padding-horizontal: ${normalizeSize(16)}px;
  justify-content: space-evenly;
`;
