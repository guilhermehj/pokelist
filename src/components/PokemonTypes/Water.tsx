import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Props} from './types';

const WaterType: React.FC<Props> = ({color, size}) => {
  const scale = size / 512;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M422.172 346.515c0 91.382-74.359 165.462-166.086 165.462C164.359 511.977 90 437.897 90 346.515 90 257.639 247.102 13.548 255.718.228c.197-.304.54-.304.736 0 8.616 13.32 165.718 257.411 165.718 346.287zM228.4 458.931c-84.28-18.441-69.858-111.801-69.858-111.801s23.014 56.358 78.863 74.614c55.848 18.255 123.34-8.519 123.34-8.519S312.68 477.371 228.4 458.931z"
        fill={color}
        scale={scale}
      />
    </Svg>
  );
};

export default WaterType;
