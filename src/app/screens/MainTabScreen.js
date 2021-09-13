
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import MatchesScreen from './MatchesScreen';

const Tab = createBottomTabNavigator();

function MainTabScreen({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Matches" component={MatchesScreen} />
        </Tab.Navigator>
    );
}

export default MainTabScreen;