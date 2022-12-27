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
import React, { useState, useContext, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import DebtorCard from "../components/DebtorCard";
import { MyContext } from "../App";
import firestore from "@react-native-firebase/firestore";

// auth()
//   .signOut()
//   .then(() => console.log("User signed out!"));
export default function Dashboard({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(MyContext);
  const [currUser, setCurrUser] = useState({});
  const [many, setMany] = useState([]);
  // console.log(userDocument);
  useEffect(() => {
    const getUserDetails = async () => {
      const data = await firestore().collection("users").doc(user.uid).get();
      setCurrUser(data._data);
    };
    getUserDetails();
  }, []);

  // const search = async () => {
  //   await firestore()
  //     .collection("users")
  //     .onSnapshot((querySnapshot) => {
  //       console.log(querySnapshot);
  //     })
  //     .then((s) => console.log(data))
  //     .catch((err) => console.log(err));
  // };
  // search();

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.hi}>Hi, </Text>
        <Text style={styles.username}>{currUser.username}</Text>
      </View>
      <View style={styles.profile}></View>
      <View style={styles.spentCard}>
        <Text style={styles.subheading}>Spent this week</Text>
        <View>
          <Text style={styles.paisa}>₹ 300</Text>
        </View>
      </View>
      <View style={styles.menus}>
        <View style={styles.menuCard}></View>
        <View style={styles.menuCard}></View>
        <View style={styles.menuCard}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headingWrapper: {},
  profile: {
    backgroundColor: "black",
    width: 60,
    height: 60,
    borderRadius: 100,
    position: "absolute",
    top: 20,
    right: 20,
  },
  hi: {
    fontSize: 30,
  },
  username: {
    fontSize: 40,
    fontWeight: "600",
  },
  spentCard: {
    marginTop: 30,
    height: 200,
    width: "100%",
    backgroundColor: "#472183",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  subheading: {
    color: "#EEEEEE",
    textAlign: "center",
    opacity: 0.5,
  },
  paisa: {
    fontSize: 60,
    textAlign: "center",
    color: "#fff",
  },
  menuCard: {
    height: 70,
    width: "100%",
    backgroundColor: "#F8F4EA",
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 10,
  }
});
