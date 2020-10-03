import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
      buttonState: "normal",
      scannedBookId: "",
      scannedStudentID: "",
    };
  }

  getCameraPermissions = async (ID) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === "granted",
      buttonState: ID,
      scanned: false,
    });
  };

  handleBarcodeScanned = async ({ type, data }) => {
    const { buttonState } = this.state;
    if (buttonState === "BookID") {
      this.setState({
        scanned: true,
        scannedBookId: data,
        buttonState: "normal",
      });
    } 
    else if (buttonState === "StudentID") {
      this.setState({
        scanned: true,
        scannedBookId: data,
        buttonState: "normal",
      });
    }
  };

  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if (buttonState !== "normal" && hasCameraPermissions) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarcodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } 
    else if (buttonState === "normal") {
      return (
        <View style={styles.container}>
          <View>
            <Image
              source={require("../assets/booklogo.jpg")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Willy</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Book ID"
              value={this.state.scannedBookId}
            />
            <TouchableOpacity
              style={styles.scanButton}
              onPress={()=>{this.getCameraPermissions("BookID")}}
            >
              <Text>Scan Book ID</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Student ID"
              value={this.state.scannedStudentID}
            />
            <TouchableOpacity
              style={styles.scanButton}
              onPress={()=>{this.getCameraPermissions("StudentID")}}
            >
              <Text>Scan Student ID</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  inputView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  inputBox: {
    borderColor: "black",
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
  },

  scanButton: {
    alignSelf: "center",
    width: 100,
    height: 25,
    borderRadius: 15,
    color: "white",
    backgroundColor: "black",
  },

  displayText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "orange",
  },
});
