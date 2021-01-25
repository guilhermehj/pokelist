import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Props} from './types';

const ElectricType: React.FC<Props> = ({color, size}) => {
  const scale = size / 512;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.56 0.583659C152.461 0.29796 152.674 0 152.976 0H332.805C332.998 0 333.169 0.125587 333.226 0.309782L415.824 267.171C415.911 267.454 415.7 267.741 415.403 267.741H295.684C295.538 267.741 295.433 267.88 295.473 268.021L364.135 509.726C364.269 510.195 363.654 510.501 363.361 510.111L96.5295 155.267C96.3115 154.977 96.5184 154.563 96.881 154.563H205.536C205.687 154.563 205.793 154.414 205.743 154.271L152.56 0.583659Z"
        fill={color}
        scale={scale}
      />
    </Svg>
  );
};

export default ElectricType;
