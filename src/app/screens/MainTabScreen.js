
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from './HomeScreen';
import MatchesScreen from './MatchesScreen';
import users from '../../assets/data/users';

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