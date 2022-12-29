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
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DebtorCard from "../components/DebtorCard";
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
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require(`../assets/Vector.png`)}></Image>
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Login</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require(`../assets/Vector.png`)}
              style={{ opacity: 0 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 72 }}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          value={email}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          value={password}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={loginUser}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.already}>
        Don't have an account?
        <Text
          style={{ color: "#7F3DFF", textDecorationStyle: "underlined" }}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Sign Up
        </Text>
      </Text>

      {/* <View style={styles.childContainer}>
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
      </View> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  google: {
    position: "absolute",
    width: 343,
    height: 56,
    left: 20,
    top: "72%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
    borderWidth: 1,
    borderColor: "#F1F1FA",
    borderStyle: "solid",
    borderRadius: 16,
  },
  googleText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
  },
  loginText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#FCFCFC",
  },
  or: {
    position: "absolute",
    top: "68%",
    textAlign: "center",
    width: "100%",
    color: "#91919F",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
  },
  already: {
    position: "absolute",
    top: "53%",
    textAlign: "center",
    width: "100%",
    color: "#91919F",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },
  loginBtn: {
    position: "absolute",
    width: 343,
    height: 56,
    left: 20,
    top: "42%",
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#F1F1FA",
    borderStyle: "solid",
    borderRadius: 16,
    height: 56,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 64,
  },
  headerInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    gap: 64,
    width: "100%",
  },
  title: {
    height: 32,
    textAlign: "center",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "auto",
  },
  titleText: {
    width: "100%",
    height: 32,
    textAlign: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    display: "flex",
    alignItems: "center",
    color: "#212325",
  },
  // childContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: "auto",
  //   marginVertical: "auto",
  //   backgroundColor: "#fff",
  //   height: 100,
  // },
  // input: {
  //   borderBottomWidth: 1,
  //   padding: 2,
  //   backgroundColor: "#F5EFE6",
  //   borderRadius: 4,
  //   width: 290,
  //   height: 60,
  //   padding: 10,
  //   fontSize: 25,
  // },
  // heading: {
  //   fontSize: 30,
  //   marginBottom: 40,
  //   textAlign: "center",
  //   fontWeight: "bold",
  // },
  // button: {
  //   marginTop: 40,
  //   width: 130,
  //   backgroundColor: "#083AA9",
  //   height: 60,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 15,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontWeight: "600",
  //   fontSize: 20,
  // },
  // labels: {
  //   fontSize: 20,
  //   marginTop: 20,
  // },
});
