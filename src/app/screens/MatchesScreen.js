import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { ViewPropTypes } from 'react-native-web';

function MatchesScreen(props) {
    return (
        <View style={styles.container}>
            <ListItem
            Component={TouchableScale}
            friction={5}
            tension={40}
            activeScale={0.95}
            >
                <Avatar rounded source={{ uri: `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png` }} />
                <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                    Chris Jackson
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: 'black' }}>
                    Wants to play Football with you!
                </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
                
            </ListItem>
            <ListItem
            Component={TouchableScale}
            friction={5}
            tension={40}
            activeScale={0.95}
            >
                <Avatar rounded source={{ uri: `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png` }} />
                <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                    Chris Jackson
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: 'black' }}>
                    Wants to play Football with you!
                </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
                
            </ListItem>
            <ListItem
            Component={TouchableScale}
            friction={5}
            tension={40}
            activeScale={0.95}
            >
                <Avatar rounded source={{ uri: `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png` }} />
                <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                    Chris Jackson
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: 'black' }}>
                    Wants to play Football with you!
                </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
                
            </ListItem>
            <ListItem
            Component={TouchableScale}
            friction={5}
            tension={40}
            activeScale={0.95}
            >
                <Avatar rounded source={{ uri: `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png` }} />
                <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                    Chris Jackson
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: 'black' }}>
                    Wants to play Football with you!
                </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
                
            </ListItem>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
   } 
});

export default MatchesScreen;