import { StatusBar } from "expo-status-bar";
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../shared/colors";
export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Full Name"
            placeholderTextColor="#000000"
            onChangeText={(name) => setName(name)}
            required={true}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000000"
            onChangeText={(email) => setEmail(email)}
            required={true}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="your Age"
            placeholderTextColor="#000000"
            onChangeText={(age) => setAge(age)}
            required={true}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            required={true}
          />
        </View>
        <View style={styles.bioView}>
          <TextInput
            style={styles.BioInput}
            multiline={true}
            numberOfLines={6}
            placeholder="Bio"
            placeholderTextColor="#000000"
            onChangeText={(bio) => setBio(bio)}
            required={true}
          />
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.watermelon,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: "70%",
    height: 40,
    marginBottom: 15,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: colors.black,
  },
  bioView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: "70%",
    height: 100,
    alignItems: "flex-start",
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: colors.black,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
  },

  submitBtn: {
    width: "45%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.watermelon,
  },
  header: {
    backgroundColor: colors.watermelon,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    width: "100%",
    backgroundColor: colors.white,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text_header: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
});
