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
  TouchableOpacity,
} from "react-native";

export default function DebtsDetailsCard(props, { navigation }) {
  return (
    <View style={styles.card}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 0.5,
    height: 90,
    width: 350,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
  },
  moneyCard: {
    flex: 1,
    height: 70,
    backgroundColor: "#E6DDC4",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  nameCard: {
    flex: 3,
    height: 70,
    backgroundColor: "#678983",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  moneyWrapper: {
    flex: 1,
    height: 90,
  },
  nameWrapper: {
    flex: 3,
    height: 90,
  },
  moneyText: {
    fontSize: 20,
    fontWeight: "900",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FAF8F1",
  },
});
