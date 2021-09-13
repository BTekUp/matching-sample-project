import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

function Card(props) {
    const {name, image, bio } = props.user;
    return (
        <View style={styles.card}>

              <ImageBackground
                    source={{
                         uri: image 
                        }}
                    style={styles.image}>
                        <View style={styles.cardInner}>

                            <Text style={styles.name} >{name}</Text>
                            <Text style={styles.bio} >{bio}</Text>

                        </View>
               </ImageBackground>

            </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
      },
      image: {
        width: '100%', 
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',

        justifyContent: 'flex-end',
      },
      cardInner: {
          padding: 10,
      },
      card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
  
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
  
        elevation: 11,
      },
      name: {
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold',
      },
      bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
      },
  })

export default Card;