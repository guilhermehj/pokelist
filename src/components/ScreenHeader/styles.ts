import {Pressable} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftContainer = styled(Pressable)`
  position: absolute;
  left: 16px;
  z-index: 1;
`;

export const CenterComponent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.View`
  position: absolute;
  right: 16px;
`;
