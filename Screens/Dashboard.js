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
  ImageBackground,
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
  const [lent, setLent] = useState(0);
  const [allDebts, setAllDebts] = useState([]);
  const [income, setIncome] = useState(0);
  const [allIncomes, setAllIncomes] = useState([]);
  // console.log(userDocument);
  useEffect(() => {
    const getUserDetails = async () => {
      const data = await firestore().collection("users").doc(user.uid).get();
      setCurrUser(data._data);
    };
    getUserDetails();
  }, []);
  useEffect(() => {
    const getDebts = async () => {
      const data = await firestore().collection("debts").doc(user.uid).get();
      let arr = data._data.allDebts;
      let tot = 0;
      arr.map((obj) => {
        tot += obj.amount;
      });
      setLent(tot);
      setAllDebts(arr);
    };
    getDebts();
  }, [allDebts]);
  useEffect(() => {
    const getIncomes = async () => {
      const data = await firestore().collection("income").doc(user.uid).get();
      let arr = data._data.allIncomes;
      let inctot = 0;
      arr.map((obj) => {
        inctot += obj.amount;
      });
      setIncome(inctot);
      setAllIncomes(arr);
    };
    getIncomes();
  }, [allIncomes]);
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
    <>
      <View style={styles.container}>
        <View style={styles.profile}></View>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginLeft: "auto",
            position: "absolute",
            top: 60,
            color: "#91919F",
          }}
        >
          Account Balance
        </Text>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginLeft: "auto",
            position: "absolute",
            fontWeight: "600",
            fontSize: 40,
            top: 90,
            color: "#161719",
          }}
        >
          ₹50000
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Income")}
          style={styles.income}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Income
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            ₹{income}
          </Text>
        </TouchableOpacity>
        <View style={styles.expenses}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Expenses
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            ₹50000
          </Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.moneyLent}
            onPress={() => navigation.navigate("Debt")}
          >
            <Text
              style={{
                color: "#7F3DFF",
                fontWeight: "500",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Money Lent
            </Text>
            <Text
              style={{
                color: "#7F3DFF",
                fontWeight: "500",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              ₹{lent}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moneyBorrowed}>
            <Text
              style={{
                color: "#7F3DFF",
                fontWeight: "500",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Money Borrowed
            </Text>
            <Text
              style={{
                color: "#7F3DFF",
                fontWeight: "500",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              ₹10
            </Text>
          </TouchableOpacity>
          <Text style={styles.transaction}>Recent Transcations</Text>
          <TouchableOpacity style={styles.seeall}>
            <Text>See All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}></TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    // width: "90%",
    // backgroundColor: "#fff",
    // height: 40,
    // marginHorizontal: 16,
  },
  seeall: {
    backgroundColor: "#EEE5FF",
    borderRadius: 20,
    width: 60,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: "center",
    top: 120,
    borderWidth: 1,
    borderColor: "#7F3DFF",
    justifyContent: "center",
    alignItems: "center",
    right: 16,
    position: "absolute",
  },
  transaction: {
    left: 16,
    top: 120,
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    flex: 0.5,
  },
  options: {
    backgroundColor: "#f5f0ff",
    height: "120%",
    borderRadius: 50,
    // position: "absolute",
    top: "90%",
  },
  profile: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#7F3DFF",
    width: 40,
    height: 40,
    borderRadius: 100,
    position: "absolute",
    top: 20,
    left: 16,
  },
  income: {
    width: 164,
    height: 80,
    position: "absolute",
    left: 16,
    top: 209,
    backgroundColor: "#00A86B",
    borderRadius: 28,
  },
  expenses: {
    width: 164,
    height: 80,
    position: "absolute",
    right: 16,
    top: 209,
    backgroundColor: "#ff4f5c",
    borderRadius: 28,
  },
  moneyLent: {
    width: 164,
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#7F3DFF",
    borderRadius: 28,
    position: "absolute",
    left: 16,
    marginTop: 20,
  },
  moneyBorrowed: {
    width: 164,
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#7F3DFF",
    borderRadius: 28,
    position: "absolute",
    right: 16,
    marginTop: 20,
  },
});
