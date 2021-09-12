import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import RegiterProfileScreen from "./RegiterProfileScreen";

const RootStack = createNativeStackNavigator();

function RootStackScreen({ navigation }) {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen
        name="RegisterProfile"
        component={RegiterProfileScreen}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
