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
import React, { useEffect, useContext, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { MyContext } from "../App";

export default function TransactionDetails({ navigation, route }) {
  const { transaction, type } = route.params;
  const { username } = useContext(MyContext);
  let containerStyle;
  if (type == "Income") containerStyle = styles.greenContainer;
  if (type == "Expense") containerStyle = styles.redContainer;
  if (type == "Lent" || type == "Borrowed")
    containerStyle = styles.blueContainer;
  return (
    <View style={styles.container}>
      <View style={containerStyle}>
        <TouchableOpacity
          style={{ position: "absolute", left: 16, top: 16, zIndex: 999 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={require(`../assets/Vector.png`)}></Image>
          {/* <Text style={{ color: "#fff" }}>Back</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail Transaction</Text>
        <Text style={styles.amount}>₹{transaction.amount}</Text>
      </View>
      <View style={styles.detailCard}>
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <Text style={{ textAlign: "center", color: "#91919F" }}>Type</Text>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
          >
            {type}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          {type == "Lent" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                From
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {username}
              </Text>
            </>
          )}
          {type == "Borrowed" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                Title
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {transaction.name}
              </Text>
            </>
          )}
          {type == "Income" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                Title
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {transaction.title}
              </Text>
            </>
          )}
          {type == "Expense" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                Title
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {transaction.title}
              </Text>
            </>
          )}
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          {type == "Lent" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                To
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {transaction.name}
              </Text>
            </>
          )}
          {type == "Borrowed" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                To
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                {username}
              </Text>
            </>
          )}
          {type == "Income" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                Wallet
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                PayTM
              </Text>
            </>
          )}
          {type == "Expense" && (
            <>
              <Text style={{ textAlign: "center", color: "#91919F" }}>
                Wallet
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
              >
                PayTM
              </Text>
            </>
          )}
        </View>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#91919F", fontSize: 20 }}>
          Description
        </Text>
        <Text style={{ padding: 16, fontSize: 23 }}>
          {transaction.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("AddDebt")}
      >
        <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  greenContainer: {
    backgroundColor: "#00A86B",
    height: "35%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  redContainer: {
    backgroundColor: "#FD3C4A",
    height: "35%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  blueContainer: {
    backgroundColor: "#0077FF",
    height: "35%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    position: "absolute",
    top: 16,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  amount: {
    textAlign: "center",
    color: "#fff",
    top: "30%",
    fontSize: 48,
    fontWeight: "700",
  },
  detailCard: {
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#cfcccc",
    borderRadius: 12,
    borderStyle: "solid",
    bottom: 40,
    backgroundColor: "#fff",
    // flex: 3,
    height: 80,
    width: "90%",
    flexDirection: "row",
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
