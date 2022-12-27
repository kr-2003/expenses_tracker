import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  ScrollAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DebtorCard from "../components/DebtorCard";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.childContainer}>
        <View>
          <Text style={styles.heading}>REGISTER</Text>
          <View>
            <Text style={styles.labels}>Enter your Username</Text>
            <TextInput
              onChangeText={(text) => setUsername(text)}
              value={username}
              style={styles.input}
            ></TextInput>
          </View>

          <View>
            <Text style={styles.labels}>Enter your E-Mail</Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Enter your Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={styles.input}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff",
    height: 100,
  },
  input: {
    borderBottomWidth: 1,
    padding: 2,
    backgroundColor: "#F5EFE6",
    borderRadius: 4,
    width: 290,
    height: 60,
    padding: 10,
    fontSize: 25,
  },
  heading: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    marginTop: 40,
    width: 130,
    backgroundColor: "#083AA9",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  labels: {
    fontSize: 20,
    marginTop: 20,
  },
});
