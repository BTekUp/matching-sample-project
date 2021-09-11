import React from "react";
import {
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

function LoginScreen(props) {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_email: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handleUsernameChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_email: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_email: false,
      });
    }
  };

  const handlePasswordChange = (val) => {};

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
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.prestigeBlue} size={20} />
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            onChange={(val) => handleUsernameChange(val)}
          />
          <Feather
            name="check-circle"
            color={data.check_email ? colors.ufoGreen : colors.prestigeBlue}
            size={20}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.prestigeBlue} size={20} />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Feather name="eye-off" color={colors.prestigeBlue} size={20} />
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
    justifyContent: "center",
    alignContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  logo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
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
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
