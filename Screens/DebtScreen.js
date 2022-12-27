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
  
  export default function DebtScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>DEBTORS</Text>
          <View style={{ height: "70%", padding: 10 }}>
            <ScrollView style={styles.cardContainer}>
              <DebtorCard name="Abhinav" money={400}></DebtorCard>
              <DebtorCard name="Khushi" money={400}></DebtorCard>
              <DebtorCard name="Sekhar" money={400}></DebtorCard>
              <DebtorCard name="Mihir" money={400}></DebtorCard>
              <DebtorCard name="Abhinav" money={400}></DebtorCard>
              <DebtorCard name="Khushi" money={400}></DebtorCard>
              <DebtorCard name="Sekhar" money={400}></DebtorCard>
              <DebtorCard name="Mihir" money={400}></DebtorCard>
            </ScrollView>
          </View>
          <View>
            <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('AddDebt')}>
              <Text style={{ fontWeight: "bold", color: "black" }}>Add Debt</Text>
            </TouchableOpacity>
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
  