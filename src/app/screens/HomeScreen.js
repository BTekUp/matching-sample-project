import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import users from '../../assets/data/users';
import Card from '../components/Card';

function HomeScreen(props) {
    
    return (
        <View style={styles.pageContainer} >
           <Card user={users[1]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
      },
  })

export default HomeScreen;