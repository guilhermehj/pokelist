import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Animated, {
  call,
  concat,
  cond,
  eq,
  Extrapolate,
  interpolate,
  multiply,
  set,
  useCode,
} from 'react-native-reanimated';
import {interpolateColor, loop, timing, useValue} from 'react-native-redash';
import Svg, {Circle, G, Path} from 'react-native-svg';

import {useNavigation} from '@react-navigation/native';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const arc =
  'M222.656 42.3439C245.386 65.0737 258.647 95.5018 259.902 127.5H187.624C186.459 114.654 180.833 102.557 171.638 93.3616C161.258 82.9815 147.18 77.15 132.5 77.15C117.82 77.15 103.742 82.9815 93.3616 93.3616C84.1666 102.557 78.5409 114.654 77.3762 127.5L5.09796 127.5C6.35263 95.5018 19.6141 65.0736 42.3439 42.3439C66.2548 18.433 98.6849 5 132.5 5C166.315 5 198.745 18.433 222.656 42.3439Z';

interface LoadingAnimationProps {
  loading: boolean;
}

const LoadingAnimation = ({loading = true}: LoadingAnimationProps) => {
  const {height, width} = useWindowDimensions();
  const [hide, setHide] = useState(false);
  const animation = useValue(0);
  const isLoading = useValue<0 | 1>(loading ? 1 : 0);

  const containerOpacity = interpolate(animation, {
    inputRange: [1, 2],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const rotation = interpolate(animation, {
    inputRange: [0, 0.05, 0.1, 0.15, 0.2, 1],
    outputRange: [0, 10, -10, 10, -10, 360],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateY = interpolate(animation, {
    inputRange: [0, 0.1, 0.2],
    outputRange: [0, -20, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const [pivotX, pivotY] = [width / 2, height / 2];

  useCode(
    () => [
      cond(
        isLoading,
        set(animation, loop({duration: 2000, boomerang: false})),
        set(animation, timing({from: animation, to: 2, duration: 1000})),
      ),
      cond(
        eq(animation, 2),
        call([], () => setHide(true)),
      ),
    ],
    [animation],
  );

  useEffect(() => {
    setTimeout(() => isLoading.setValue(loading ? 1 : 0), 2000);
  }, [loading]);

  if (hide) return null;

  return (
    <Animated.View
      style={{
        opacity: containerOpacity,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <Pokeball
        {...{
          rotation,
          pivotX,
          pivotY,
          translateY,
          animation,
          height,
          width,
        }}
      />
    </Animated.View>
  );
};

interface ArcProps {
  rotation: Animated.Node<number>;
  animation: Animated.Node<number>;
  translateY?: Animated.Node<number>;
  pivotX?: number;
  pivotY?: number;
  height: number;
  width: number;
}

export const Pokeball = ({height, animation, rotation}: ArcProps) => {
  const {width} = useWindowDimensions();

  const pokeballButtonColor = interpolateColor(animation, {
    inputRange: [0, 0.05, 0.1, 0.15, 0.2, 0.3],
    outputRange: ['#F93318', '#FFF', '#F93318', '#FFF', '#F93318', '#FFF'],
  });

  const translateOutBottom = interpolate(animation, {
    inputRange: [1, 2],
    outputRange: [0, height],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateOutTop = interpolate(animation, {
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <AnimatedG
        style={{
          transform: [
            {
              translateY: height / 2,
              translateX: width / 2,
            },
            {
              rotate: concat(rotation, 'deg'),
            },
            {
              translateY: -132.5,
              translateX: -265 / 2,
            },
            {
              translateY: translateOutTop,
              translateX: 0,
            },
          ],
        }}>
        <AnimatedPath
          fill="#F93318"
          d={arc}
          stroke={'black'}
          strokeWidth={10}
        />
      </AnimatedG>
      <AnimatedG
        style={{
          transform: [
            {
              translateY: height / 2,
              translateX: width / 2,
            },
            {
              rotate: '180deg',
            },
            {
              rotate: concat(rotation, 'deg'),
            },
            {
              translateY: -132.5,
              translateX: -265 / 2,
            },
            {
              translateY: multiply(translateOutBottom, -1),
            },
          ],
        }}>
        <AnimatedPath fill="#FFF" d={arc} stroke={'black'} strokeWidth={10} />
      </AnimatedG>
      <AnimatedCircle
        r="40"
        stroke="black"
        strokeWidth={3}
        fill={pokeballButtonColor}
        style={{
          transform: [
            {
              translateY: height / 2,
              translateX: width / 2,
            },
            {
              translateY: translateOutBottom,
            },
          ],
        }}
      />
    </Svg>
  );
};

export default LoadingAnimation;
