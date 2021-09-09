import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../shared/colors';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.antiFlashWhite,
    },
});

export default LoginScreen;