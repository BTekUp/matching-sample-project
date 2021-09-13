import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import users from "../../assets/data/users";
import Card from "../components/Card";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import LIKE from "../../assets/images/LIKE.png";
import nope from "../../assets/images/nope.png";
import { FontAwesome } from "@expo/vector-icons";

const ROTATION = 60;
const swipeVelocity = 800;

function HomeScreen(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = users[currentIndex];

  const nextProfile = users[nextIndex];

  const { width: screenWidth } = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);

  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, screenWidth], [0, ROTATION]) + "deg"
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1]
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) < swipeVelocity) {
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        event.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      );
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  return (
    <View style={styles.pageContainer}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            <Card user={nextProfile} />
          </Animated.View>
        </View>
      )}

      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Animated.Image
              source={LIKE}
              style={[styles.Like, { left: 10 }, likeStyle]}
              resizeMode="contain"
            />

            <Animated.Image
              source={nope}
              style={[styles.Like, { right: 10 }, nopeStyle]}
              resizeMode="contain"
            />

            <Card user={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      )}

      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity style={[styles.button, { right: 80 }]}>
          <FontAwesome name="times" size={27} color="#ff6b81"></FontAwesome>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { left: 57 }]}>
          <FontAwesome name="heart" size={27} color="#7bed9f"></FontAwesome>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  animatedCard: {
    width: "90%",
    height: "70%",
    flex: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Like: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 10,
    zIndex: 1,
    elevation: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 7,
    position: "absolute",
    marginTop: 10,
  },
});

export default HomeScreen;
