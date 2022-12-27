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
    // const [number, onChangeNumber] = React.useState(null);
    return (
      <View style={styles.card}>
        <View style={styles.nameWrapper}>
          <View style={styles.nameCard}>
              <Text style={styles.nameText}>{props.name}</Text>
          </View>
        </View>
        <View style={styles.moneyWrapper}>
            <View style={{...styles.moneyCard, ...styles.row}}>
                {props.extraContent}
                {props.content}
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      // flex: 0.5,
      height: 60,
      width: 350,
    //   backgroundColor: "#FAF8F1",
      flexDirection: "row",
      marginBottom: 10,
      borderRadius: 10,
    },
    moneyCard: {
      flex: 2,
      height: 60,
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
      height: 60,
      backgroundColor: "#678983",
      margin: 10,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    moneyWrapper: {
      flex: 2,
      height: 60,
    },
    nameWrapper: {
      flex: 3,
      height: 60,
    },
    moneyText: {
      fontSize: 20,
      fontWeight: "900"
    },
    nameText: {
      fontSize: 20,
      fontWeight: "600",
      color: "#FAF8F1"
    },
    row: {
        // flex: 1,
        flexDirection: 'row',
        // width: "wp('50%')",
        textAlign: "center",
        // display: flex,
        justifyContent: "space-evenly",
        alignItems: "center"
      },
  });
  