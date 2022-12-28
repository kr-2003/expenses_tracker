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
import Dashboard from "./Screens/Dashboard";
import DebtorDetail from "./Screens/DebtorDetail";
import auth from "@react-native-firebase/auth";
import AddDebt from "./Screens/AddDebt";
import React, { useEffect, useState, createContext } from "react";

const Stack = createNativeStackNavigator();
const MyContext = React.createContext(null);
export { MyContext };
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  };
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
    <MyContext.Provider value={{ user }}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="AddDebt"
            component={AddDebt}
          /> */}
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
            name="DebtorCard"
            component={DebtorCard}
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
