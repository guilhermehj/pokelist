import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Animated, {
  concat,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {loop} from 'react-native-redash';
import Svg, {Circle, Ellipse, G, Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const arc =
  'M26.101 5.03419C28.8017 7.822 30.3695 11.5658 30.4922 15.5H21.8715C21.7563 13.9423 21.1054 12.4692 20.024 11.3529C18.8269 10.1172 17.1999 9.42 15.5 9.42C13.8001 9.42 12.1731 10.1172 10.976 11.3529C9.89461 12.4692 9.2437 13.9423 9.12846 15.5L0.507797 15.5C0.630548 11.5658 2.19828 7.822 4.89897 5.03419C7.71332 2.12904 11.527 0.5 15.5 0.5C19.473 0.5 23.2867 2.12905 26.101 5.03419Z';

const LoadingMore = () => {
  const {width} = useWindowDimensions();
  const height = 40;
  const animation = loop({duration: 2000, boomerang: false});
  const rotation = interpolate(animation, {
    inputRange: [0, 0.5],
    outputRange: [0, 360],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  const x = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [-80, width + 30],
    extrapolate: Extrapolate.CLAMP,
  });

  const jumpLoop = loop({duration: 300, boomerang: true});

  const jump = interpolate(jumpLoop, {
    inputRange: [0, 1],
    outputRange: [0, 10],
    extrapolate: Extrapolate.CLAMP,
  });

  const ellipseRx = interpolate(jumpLoop, {
    inputRange: [0, 1],
    outputRange: [10, 15],
    extrapolate: Extrapolate.CLAMP,
  });

  const ellipseRy = interpolate(jumpLoop, {
    inputRange: [0, 1],
    outputRange: [2, 3],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={{width, height: 60, justifyContent: 'center'}}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: x,
            },
          ],
        }}>
        <Svg width={60} height={60} viewBox={`0 0 ${height} ${60}`}>
          <AnimatedEllipse
            cx="15"
            cy="43"
            rx={ellipseRx}
            ry={ellipseRy}
            fill="rgba(0, 0, 0, 0.6)"
          />
          <AnimatedG
            style={{
              transform: [
                {
                  translateY: jump,
                },
                {
                  translateX: 31 / 2,
                  translateY: 16,
                },
                {
                  rotate: concat(rotation, 'deg'),
                },
                {
                  translateX: -31 / 2,
                  translateY: -16,
                },
              ],
            }}>
            <AnimatedPath
              fill="#F93318"
              d={arc}
              stroke={'black'}
              strokeWidth={1}
            />
          </AnimatedG>
          <AnimatedG
            style={{
              transform: [
                {
                  translateY: jump,
                },
                {
                  translateX: 31 / 2,
                  translateY: 16,
                },
                {
                  rotate: '180deg',
                },
                {
                  rotate: concat(rotation, 'deg'),
                },
                {
                  translateX: -31 / 2,
                  translateY: -16,
                },
              ],
            }}>
            <AnimatedPath
              fill="#FFF"
              d={arc}
              stroke={'black'}
              strokeWidth={1}
            />
          </AnimatedG>
          <AnimatedCircle
            cx="15.3"
            cy="16"
            r="4"
            stroke="black"
            strokeWidth={1}
            fill={'#FFF'}
            style={{
              transform: [
                {
                  translateY: jump,
                },
              ],
            }}
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default LoadingMore;
