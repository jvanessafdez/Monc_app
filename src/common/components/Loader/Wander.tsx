import * as React from 'react'
import { Animated, View } from 'react-native'
import { SpinnerProps, defaultProps } from './SpinnerProps'
import AnimationContainer from './AnimationContainer'
import { loop } from './utils'
import { SafeAreaView } from 'react-native'
import { colors, general } from 'assets'

class Wander extends React.Component<SpinnerProps> {
  static defaultProps = defaultProps

  render() {
    const {
      size,
      color,
      style,
      animating,
      hidesWhenStopped,
      ...rest
    } = this.props
    const wanderDistance = size * 0.75

    return (
      <AnimationContainer
        initAnimation={() => ({
          wander: (value) => ({
            values: [value],
            animation: loop({
              duration: 2000,
              value: value,
              keyframes: [0, 25, 50, 75, 100],
            }),
          }),
        })}
        animating={animating}
      >
        {(values) => (
          <View
            style={[
              {
                width: size,
                height: size,
                opacity: !animating && hidesWhenStopped ? 0 : 1,
              },
              style,
            ]}
            {...rest}
          >
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: size,
                    height: size,
                    position: 'absolute',
                    transform: [
                      {
                        rotate: `${index * 90}deg`,
                      },
                    ],
                  }}
                >
                  <Animated.View
                    style={{
                      width: size / 5,
                      height: size / 5,
                      backgroundColor: color,
                      position: 'absolute',
                      transform: [
                        {
                          translateX: values.wander[0].interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: [
                              0,
                              wanderDistance,
                              wanderDistance,
                              0,
                              0,
                            ],
                          }),
                        },
                        {
                          translateY: values.wander[0].interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: [
                              0,
                              0,
                              wanderDistance,
                              wanderDistance,
                              0,
                            ],
                          }),
                        },
                        {
                          scale: values.wander[0].interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange:
                              index % 2 === 0
                                ? [1, 0.6, 1, 0.6, 1]
                                : [0.6, 1, 0.6, 1, 0.6],
                          }),
                        },
                        {
                          rotate: values.wander[0].interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: [
                              '0deg',
                              '-90deg',
                              '-180deg',
                              '-270deg',
                              '-360deg',
                            ],
                          }),
                        },
                      ],
                    }}
                  />
                </View>
              ))}
          </View>
        )}
      </AnimationContainer>
    )
  }
}

export const Loader = () => (
  <SafeAreaView style={general.screen}>
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Wander size={45} color={colors.primary} />
    </View>
  </SafeAreaView>
);