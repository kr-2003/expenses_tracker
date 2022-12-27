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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyContext } from "../App";
import { useContext, useEffect, useState } from "react";
import DebtsDetailsCard from "../components/DebtsDetailsCard";
import firestore from "@react-native-firebase/firestore";
import DebtorCard from "../components/DebtorCard";

export default function DebtorDetail({ route, navigation }) {
  const { name } = route.params;
  const { user } = useContext(MyContext);
  const [total, setTotal] = useState(0);
  const [brr, setBrr] = useState([{}]);
  useEffect(() => {
    const getAllDebts = async () => {
      const data = await firestore().collection("debts").doc(user.uid).get();
      const marr = data._data.allDebts;
      let arr = [];
      let tot = 0;
      marr.map((item) => {
        if (item.name == name) {
          arr.push(item);
          tot += item.amount;
        }
      });
      setTotal(tot);
      setBrr(arr);
    };
    getAllDebts();
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>{`${name}'s`} Debts</Text>
      <View style={styles.spentCard}>
        <Text style={styles.subheading}>Total Amount {name} owes you</Text>
        <View>
          <Text style={styles.paisa}>₹{total}</Text>
        </View>
      </View>
      <ScrollView>
        {brr.map((item) => (
          <View style={styles.amts}>
            <Text style={{ fontWeight: "600", fontSize: 30 }}>
              ₹{item.amount}
            </Text>
            <View style={{ marginTop: "auto" }}>
              <Text style={styles.subheading2}>Description: </Text>
              <Text numberOfLines={1} style={{ fontWeight: "600" }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    backgroundColor: "#000000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  spentCard: {
    marginTop: 30,
    height: 200,
    width: "100%",
    backgroundColor: "#5C2E7E",
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
  subheading2: {
    color: "#000000",
    opacity: 0.5,
  },
  paisa: {
    fontSize: 60,
    textAlign: "center",
    color: "#fff",
  },
  sectionTitle: {
    color: "#E6DDC4",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 30,
    textAlign: "center",
  },
  amts: {
    height: 100,
    width: "100%",
    backgroundColor: "#8BBCCC",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
  },
});
