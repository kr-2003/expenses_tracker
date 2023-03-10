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
  let name2 = "not defined";
  if (route.params !== undefined) {
    const { name } = route.params;
    name2 = name;
  }

  const { user } = useContext(MyContext);
  const [total, setTotal] = useState(0);
  const [brr, setBrr] = useState([{}]);
  const deleteHandler = async (debt) => {
    await firestore()
      .collection("debts")
      .doc(user.uid)
      .update({ allDebts: firestore.FieldValue.arrayRemove(debt) })
      .then((msg) => console.log(msg))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const getAllDebts = async () => {
      const data = await firestore().collection("debts").doc(user.uid).get();
      const marr = data._data.allDebts;
      let arr = [];
      let tot = 0;
      marr.map((item) => {
        if (item.name == name2) {
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
        <Image source={require(`../assets/back_w.png`)}></Image>
        {/* <Text style={{ color: "#fff" }}>Back</Text> */}
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>{`${name2}'s`} Debts</Text>
      <View style={styles.spentCard}>
        <Text style={styles.subheading}>Total Amount {name2} owes you</Text>
        <View>
          <Text style={styles.paisa}>???{total}</Text>
        </View>
      </View>
      <ScrollView>
        {brr.map((item) => (
          <TouchableOpacity key={Math.random()} onPress={()=>navigation.navigate("TransactionDetails", {type: "Lent", transaction: item})}>
            <View style={styles.amts}>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontWeight: "600", fontSize: 30 }}>
                  ???{item.amount}
                </Text>
                <View style={{ marginTop: "auto" }}>
                  <Text style={styles.subheading2}>Description: </Text>
                  <Text numberOfLines={1} style={{ fontWeight: "600" }}>
                    {item.description}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.2,
                  paddingRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {/* <TouchableOpacity onPress={() => deleteHandler(item)}>
                  <Image source={require(`../assets/delete.png`)}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 25 }}>
                  <Image source={require(`../assets/edit.png`)}></Image>
                </TouchableOpacity> */}
              </View>
            </View>
          </TouchableOpacity>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  spentCard: {
    marginTop: 30,
    height: 200,
    width: "95%",
    backgroundColor: "#5C2E7E",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginLeft: "auto",
    marginRight: "auto",
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
    width: "95%",
    backgroundColor: "#8BBCCC",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
