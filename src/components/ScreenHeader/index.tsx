import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import normalizeSize from '../../helpers/normalizeSize';
import {
  CenterComponent,
  Container,
  LeftContainer,
  RightContainer,
} from './styles';

interface Props {
  center?: React.ReactNode;
  right?: React.ReactNode;
  onBackPress: () => void;
}

const ScreenHeader: React.FC<Props> = ({onBackPress, right, center}) => {
  return (
    <Container>
      <LeftContainer onPress={onBackPress}>
        <Icon
          name="arrowleft"
          size={normalizeSize(32)}
          color={'rgba(0, 0, 0, 0.4)'}
        />
      </LeftContainer>
      <CenterComponent>{center}</CenterComponent>
      <RightContainer>{right}</RightContainer>
    </Container>
  );
};

export default ScreenHeader;
