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

import DebtorCard from "../components/DebtorCard";

export default function AddDebt({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Lauda Lassan</Text>
      </TouchableOpacity>
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
    paddingTop: 40,
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
});
