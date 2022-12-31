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
import Home from "./Screens/Home";
import DebtScreen from "./Screens/DebtScreen";
import DebtorCard from "./components/DebtorCard";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import AddDebt from "./Screens/AddDebt";
import AddIncome from "./Screens/AddIncome";
import Dashboard from "./Screens/Dashboard";
import DebtorDetail from "./Screens/DebtorDetail";
import IncomeScreen from "./Screens/IncomeScreen";
import IncomeDetail from "./Screens/IncomeDetail";
import TransactionDetails from "./Screens/TransactionDetails";
import ExpenseScreen from "./Screens/ExpenseScreen";
import auth from "@react-native-firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import firestore from "@react-native-firebase/firestore";
import EditTransactions from "./Screens/EditTransactions";
import BorrowScreen from "./Screens/BorrowScreen";
import AddExpense from "./Screens/AddExpense";
import BorrowDetails from "./Screens/BorrowDetails";
import AddBorrow from "./Screens/AddBorrow";
const Stack = createNativeStackNavigator();
const MyContext = React.createContext(null);
export { MyContext };
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const getUserDetails = async () => {
      if (user !== undefined) {
        const data = await firestore().collection("users").doc(user.uid).get();
        setUsername(data._data.username);
        console.log(username);
      }
    };
    getUserDetails();
  }, [user]);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <MyContext.Provider value={{ user, username }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Debt"
            component={DebtScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DebtorCard"
            component={DebtorCard}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddDebt"
            component={AddDebt}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DebtorDetail"
            component={DebtorDetail}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddIncome"
            component={AddIncome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="IncomeDetail"
            component={IncomeDetail}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Income"
            component={IncomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TransactionDetails"
            component={TransactionDetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="EditTransactions"
            component={EditTransactions}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ExpenseScreen"
            component={ExpenseScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddExpense"
            component={AddExpense}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BorrowScreen"
            component={BorrowScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BorrowDetails"
            component={BorrowDetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddBorrow"
            component={AddBorrow}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
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
