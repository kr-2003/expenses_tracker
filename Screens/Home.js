import {
  View,
  Text,
  Flatlist,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require(`../assets/Illustration.png`)}></Image>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headtext}>Know where your money goes</Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadtext}>
          Track your transaction easily, with categories and financial report{" "}
        </Text>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.signUpText}>Login</Text>
      </TouchableOpacity>
      {/* <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginBtn: {
    position: "absolute",
    width: 343,
    height: 56,
    left: 20,
    top: "80%",
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },
  signUpBtn: {
    position: "absolute",
    width: 343,
    height: 56,
    left: 20,
    top: "89%",
    backgroundColor: "#EEE5FF",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },
  signUpText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#7F3DFF"
  },
  loginText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#FCFCFC"
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    padding: 0,
  },
  buttonWrapper: {
    flex: 0.1,
    flexDirection: "row",
    marginBottom: 0,
    marginTop: "auto",
    padding: 10,
  },
  heading: {
    position: "absolute",
    width: 280,
    height: 78,
    left: 47,
    top: "55%",
  },
  headtext: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
  },
  subheading: {
    position: "absolute",
    width: 272,
    height: 38,
    left: 51,
    top: "67%",
  },
  subheadtext: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#91919F",
  },
});
