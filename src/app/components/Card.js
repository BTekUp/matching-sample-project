import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import baseURL from '../../assets/common/baseUrl';

function Card(props) {
    const {name, image, bio } = props.user;
    let imageSplit = image.split(":");
    let imageSplit2 = baseURL.split(":");
    let newImage = imageSplit[0].concat(':');
    newImage = newImage.concat(imageSplit2[1]);
    newImage = newImage.concat(':');
    newImage = newImage.concat(imageSplit[2]);
    return (
        <View style={styles.card}>

              <ImageBackground
                    resizeMode="cover"
                    source={{
                         uri: newImage
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