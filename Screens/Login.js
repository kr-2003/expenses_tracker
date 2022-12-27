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
import auth from "@react-native-firebase/auth";

// auth()
//   .createUserWithEmailAndPassword(
//     "jane.doe2@example.com",
//     "Super!"
//   )
//   .then(() => {
//     console.log("User account created & signed in!");
//   })
//   .catch((error) => {
//     if (error.code === "auth/email-already-in-use") {
//       console.log("That email address is already in use!");
//     }

//     if (error.code === "auth/invalid-email") {
//       console.log("That email address is invalid!");
//     }

//     console.error(error);
//   });

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.childContainer}>
        <View>
          <Text style={styles.heading}>LOGIN</Text>
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
          <TouchableOpacity onPress={loginUser} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
