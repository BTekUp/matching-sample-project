import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MatchesScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Matches</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
   } 
});

export default MatchesScreen;