import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { Button, TextButton } from "./src/components/Button/style";
import { Container } from "./src/components/Container/style";
import { useEffect, useState } from "react";
import { Animation } from "./src/components/Animation/Animation";

export default function App() {
  const [boxAnim] = useState(new Animated.Value(0));
  const [boxPunch] = useState(new Animated.Value(0));
  const [boxDecay] = useState(new Animated.Value(0));

  return (
    <Container>
      <Animated.View
        style={{
          backgroundColor: "#aff33f",
          height: 50,
          width: 50,
          marginBottom: 20,
          borderRadius: 50,
          transform: [{ translateX: boxAnim }],
        }}
      />

      <Animated.View
        style={{
          backgroundColor: "#eff33f",
          height: 50,
          width: 50,
          marginBottom: 20,
          borderRadius: 50,
          transform: [{ translateX: boxPunch }],
        }}
      />

      <Animated.View
        style={{
          backgroundColor: "#111ffe",
          height: 50,
          width: 50,
          marginBottom: 20,
          borderRadius: 50,
          transform: [{ translateX: boxDecay }],
        }}
      />

      <Button
        onPress={() => {
          Animated.timing(boxAnim, {
            useNativeDriver: true,
            toValue: -150,
            duration: 500,
          }).start();

          Animated.spring(boxPunch, {
            useNativeDriver: true,
            toValue: -150,
            speed: 10,
            bounciness: 20,
          }).start();
        }}
      >
        <TextButton>Left</TextButton>
      </Button>

      <Button
        onPress={() => {
          Animated.timing(boxAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 500,
          }).start();

          Animated.spring(boxPunch, {
            useNativeDriver: true,
            toValue: 0,
            speed: 10,
            bounciness: 20,
          }).start();
        }}
      >
        <TextButton>Center</TextButton>
      </Button>

      <Button
        onPress={() => {
          Animated.timing(boxAnim, {
            useNativeDriver: true,
            toValue: 150,
            duration: 500,
          }).start();

          Animated.spring(boxPunch, {
            useNativeDriver: true,
            toValue: 150,
            speed: 10,
            bounciness: 20,
          }).start();
        }}
      >
        <TextButton>Right</TextButton>
      </Button>

      <Button
        onPress={() => {
          Animated.decay(boxDecay, {
            useNativeDriver: true,
            velocity: 0.10,
            deceleration: 0.999,
          }).start();
        }}
      >
        <TextButton>+</TextButton>
      </Button>

      <Button
        onPress={() => {
          Animated.decay(boxDecay, {
            useNativeDriver: true,
            velocity: -0.10,
            deceleration: 0.999,
          }).start();
        }}
      >
        <TextButton>-</TextButton>
      </Button>
    </Container>
  );
}
