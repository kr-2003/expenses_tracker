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
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "../App";
import DebtorCard from "../components/DebtorCard";
import firestore from "@react-native-firebase/firestore";

export default function ExpenseScreen({ navigation }) {
  const { user } = useContext(MyContext);
  const [allExpenses, setAllExpenses] = useState([{}]);
  const [expense, setExpense] = useState(0);
  let arr = [{}];
  useEffect(() => {
    const getDebts = async () => {
      const data = await firestore().collection("expense").doc(user.uid).get();
      arr = data._data.allExpenses;
      let tot = 0;
      arr.map((obj) => {
        tot += obj.amount;
      });
      setExpense(tot);
      setAllExpenses(arr);
    };
    getDebts();

    // console.log(reduced, reducedArr);
  }, [allExpenses]);

  // console.log(allDebts);
  // console.log(allDebts);
  // console.log(allDebts);
  // console.log(allDebts);
  // console.log(allDebts);

  // reduced.map((item) => {
  //   console.log(item);
  // });
  // const marr = reduced;
  // setAll(marr);
  // // console.log(marr);
  // console.log("alllllll", all);

  return (
    <View style={styles.container}>
      <Image source={require(`../assets/BG.png`)} style={styles.image}></Image>
      <TouchableOpacity
        style={{ position: "absolute", left: 16, top: 16, zIndex: 999 }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require(`../assets/Vector.png`)}></Image>
        {/* <Text style={{ color: "#fff" }}>Back</Text> */}
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          top: 16,
          fontSize: 20,
          fontWeight: "500",
          width: "100%",
          textAlign: "center",
        }}
      >
        Expenses
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 100,
          fontSize: 15,
          fontWeight: "400",
          width: "100%",
          textAlign: "center",
          color: "#91919F",
        }}
      >
        Total Expenses
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 120,
          fontSize: 40,
          fontWeight: "600",
          width: "100%",
          textAlign: "center",
          color: "black",
        }}
      >
        ₹{expense}
      </Text>

      <View style={styles.tasksWrapper}>
        <View style={{ height: "70%" }}>
          <ScrollView style={styles.cardContainer}>
            {allExpenses !== undefined &&
              allExpenses.map((obj) => {
                return (
                  <TouchableOpacity
                    key={Math.random()}
                    onPress={() =>
                      navigation.navigate("TransactionDetails", {
                        transaction: obj,
                        type: "Expense",
                      })
                    }
                  >
                    <DebtorCard
                      key={obj.title}
                      name={obj.title}
                      money={obj.amount}
                    ></DebtorCard>
                  </TouchableOpacity>
                );
              })}

            {/* <DebtorCard name="Khushi" money={400}></DebtorCard>
                <DebtorCard name="Sekhar" money={400}></DebtorCard>
                <DebtorCard name="Mihir" money={400}></DebtorCard>
                <DebtorCard name="Abhinav" money={400}></DebtorCard>
                <DebtorCard name="Khushi" money={400}></DebtorCard>
                <DebtorCard name="Sekhar" money={400}></DebtorCard>
                <DebtorCard name="Mihir" money={400}></DebtorCard> */}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.loginText}>+ Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: "100%",
    height: 300,
  },

  container: {
    flex: 1,
    height: 70,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tasksWrapper: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: "70%",
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: "#E6DDC4",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 30,
  },
  cardContainer: {
    height: 200,
  },
  addButton: {
    elevation: 100,
    marginTop: 40,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    backgroundColor: "#D6E4E5",
  },
  loginBtn: {
    position: "absolute",
    width: 343,
    height: 56,
    left: 20,
    top: "85%",
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
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
});
