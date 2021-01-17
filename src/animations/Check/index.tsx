import React, { useEffect, useState } from 'react';

import { Circle, Line, Svg } from 'react-native-svg';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';

const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CheckAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const transition = useTransition(animate, { duration: 500 });
  const intersection = {
    x: 65,
    y: 135,
  };
  const circleRadius = interpolate(transition, {
    inputRange: [0, 0.2],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP,
  });
  const line1x2 = interpolate(transition, {
    inputRange: [0.2, 0.4],
    outputRange: [40, intersection.x],
    extrapolate: Extrapolate.CLAMP,
  });
  const line1y2 = interpolate(transition, {
    inputRange: [0.2, 0.4],
    outputRange: [90, intersection.y],
    extrapolate: Extrapolate.CLAMP,
  });
  const line2x2 = interpolate(transition, {
    inputRange: [0.4, 1],
    outputRange: [intersection.x, 160],
    extrapolate: Extrapolate.CLAMP,
  });
  const line2y2 = interpolate(transition, {
    inputRange: [0.4, 1],
    outputRange: [intersection.y, 90],
    extrapolate: Extrapolate.CLAMP,
  });
  const strokeWidthLine1 = interpolate(transition, {
    inputRange: [0, 0.1],
    outputRange: [0, 25],
    extrapolate: Extrapolate.CLAMP,
  });
  const strokeWidthLine2 = interpolate(transition, {
    inputRange: [0.4, 0.5],
    outputRange: [0, 25],
    extrapolate: Extrapolate.CLAMP,
  });

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);
  return (
    <Svg height="200" width="200">
      <AnimatedCircle cx="100" cy="100" r={circleRadius} fill="#4BB543" />
      <AnimatedLine
        cy={90}
        cx={40}
        x1={40}
        y1={90}
        x2={line1x2}
        y2={line1y2}
        stroke="white"
        strokeWidth={strokeWidthLine1}
        strokeLinecap={'round'}
      />
      <AnimatedLine
        cy={90}
        cx={40}
        x1={intersection.x}
        y1={intersection.y}
        x2={line2x2}
        y2={line2y2}
        stroke="white"
        strokeWidth={strokeWidthLine2}
        strokeLinecap={'round'}
      />
    </Svg>
  );
};

export default CheckAnimation;
