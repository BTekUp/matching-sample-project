import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../shared/colors";
import HomeScreen from "./HomeScreen";
import MatchesScreen from "./MatchesScreen";

const Tab = createBottomTabNavigator();

function MainTabScreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="home" size={30} color="grey" />;
          },
          showIcon: true,
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="check" size={30} color="grey" />;
          },
          showIcon: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
