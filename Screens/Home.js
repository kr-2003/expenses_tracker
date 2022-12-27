import {
  View,
  Text,
  Flatlist,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
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
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 0.1,
    flexDirection: "row",
    marginBottom: 0,
    marginTop: "auto",
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#ADA2FF",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
