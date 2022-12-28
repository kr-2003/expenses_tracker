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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firestore from "@react-native-firebase/firestore";
import InputCard from "../components/InputCard";
import AmtInputCard from "../components/AmtInputCard";
import { MyContext } from "../App";
import React, { useContext } from "react";

export default function AddDebt({ navigation }) {
  const [Amt, onChangeAmt] = React.useState(0);
  const [name, onChangeName] = React.useState(null);
  const [details, onChangeDetails] = React.useState(null);
  const { user } = useContext(MyContext);
  const handleSubmit = async () => {
    await firestore()
      .collection("debts")
      .doc(user.uid)
      .update({
        allDebts: firestore.FieldValue.arrayUnion({
          name: name.toLowerCase(),
          amount: Number(Amt),
          description: details,
        }),
      });
    navigation.goBack();
  };
  const inputAmt = (
    <TextInput
      style={styles.input}
      onChangeText={onChangeAmt}
      value={Amt}
      placeholder="0.00"
      keyboardType="numeric"
    />
  );

  const inputName = (
    <TextInput
      style={styles.input}
      onChangeText={onChangeName}
      value={name}
      placeholder="Rohit"
      keyboardType="text"
    />
  );

  const inputDetails = (
    <TextInput
      multiline
      numberOfLines={4}
      style={styles.input}
      onChangeText={onChangeDetails}
      value={details}
      placeholder="Enter Details Here..."
      keyboardType="text"
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Add Debt</Text>
        {/* <View>
          <Text>Enter the Amount: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="0.00"
            keyboardType="numeric"
          />
        </View> */}
        <InputCard
          name="Borrower's Name: "
          content={inputName}
          type={1}
        ></InputCard>
        <AmtInputCard
          name="Enter the Amount: "
          content={inputAmt}
          extraContent={<Text>Rs. </Text>}
        ></AmtInputCard>
        <InputCard name="Details: " content={inputDetails} type={2}></InputCard>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={styles.addButton}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={{ fontWeight: "bold", color: "black" }}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontWeight: "bold", color: "black" }}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    backgroundColor: "#181D31",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tasksWrapper: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: "70%",
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  sectionTitle: {
    color: "#88CAC4",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 30,
  },
  cardContainer: {
    height: 200,
  },
  addButton: {
    // elevation: 100,
    marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 10,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D6E4E5",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
  },
});
