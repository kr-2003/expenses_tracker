import React from "react";
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
  TextInput,
} from "react-native";

export default function AmtInputCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.row }>
        {props.extraContent}
        {props.content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 60,
  },
  row: {
    flexDirection: 'row',
    // textAlign: "center",
    // justifyContent: "space-evenly",
    alignItems: "center"
  },
});
