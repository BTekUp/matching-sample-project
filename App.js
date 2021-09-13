import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabScreen from './src/app/screens/MainTabScreen';
import RootStackScreen from './src/app/screens/RootStackScreen';
import users from './src/assets/data/users';

export default function App() {

  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */  }
          <MainTabScreen /> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
