import React from "react";
import {
  Platform,
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

function LoginScreen({ navigation }) {
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

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const togglePasswordVisibilty = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

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
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.prestigeBlue} size={20} />
          <TextInput
            placeholder="Enter your username"
            style={styles.textInput}
            onChangeText={(val) => handleUsernameChange(val)}
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
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={() => togglePasswordVisibilty()}>
            <Feather
              name={data.secureTextEntry ? "eye-off" : "eye"}
              color={colors.prestigeBlue}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.signInButton}>
              <Text style={styles.textSign}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={() => navigation.navigate("Register")}
          >
            <View style={styles.registerButton}>
              <Text style={styles.textSign}>Register</Text>
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
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 3,
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
});

export default LoginScreen;
