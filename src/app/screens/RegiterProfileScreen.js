import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

import colors from "../shared/colors";

function RegiterProfileScreen({ route, navigation }) {
  const [state, setState] = React.useState({
    image: null,
  });
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Fontisto
            name="tinder"
            size={72}
            color="#fff"
            style={{ margin: 10 }}
          />
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.upload}>
          <Image style={styles.image} source={{ uri: state.image }} />
          <TouchableOpacity style={styles.uploadButton}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Full Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.prestigeBlue} size={20} />
          <TextInput
            placeholder="Enter your full name"
            style={styles.textInput}
            // onChangeText={(val) => handleUsernameChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Your Bio</Text>
        <View style={styles.action}>
          <Feather name="info" color={colors.prestigeBlue} size={20} />
          <TextInput
            placeholder="Enter a Bio"
            style={styles.multilineTextInput}
            multiline={true}
            // maxLength={10}
            numberOfLines={4}
            blurOnSubmit={true}
            textAlignVertical="top"
            // onChangeText={(val) => handleUsernameChange(val)}
          />
          <Text>0/200</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.signInButton}>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate("Register")}
          >
            <View style={styles.registerButton}>
              <Text style={styles.textSign}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.watermelon,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    // paddingHorizontal: 20,
    // paddingBottom: 10,
  },
  logo: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 4,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: colors.prestigeBlue,
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -5,
    paddingLeft: 10,
    color: colors.prestigeBlue,
  },
  multilineTextInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: colors.prestigeBlue,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  buttons: {
    alignItems: "center",
    marginTop: 50,
  },
  signInButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.watermelon,
    borderRadius: 10,
  },
  registerButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.twinkleBlue,
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: colors.peace,
  },
  upload: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadButton: {
    marginLeft: 30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.twinkleBlue,
  },
});

export default RegiterProfileScreen;
