import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import users from '../../assets/data/users';
import Card from '../components/Card';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler'

function HomeScreen(props) {
    
  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: translateX.value,
    },
  ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log('Touch start');
    },
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      console.log("Touch ended")
    },
  });

    return (
        <View style={styles.pageContainer} >
          <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={[styles.animatedCard, cardStyle]}>
                <Card user={users[1]}/>
              </Animated.View>
          </PanGestureHandler>  

          <Pressable onPress={() => (sharedValue.value = withSpring(Math.random()))}>
            <Text>Change Value</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
      },
    animatedCard: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

export default HomeScreen;