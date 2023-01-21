import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";

///jjjj

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState([]);
  const [passwordErrorMessage, setpasswordErrorMessage] = useState([]);
  const [confirmPassword, setconfirmPassword] = useState([]);
  const [confirmPasswordErrorMessage, setconfirmPasswordErrorMessage] =
    useState([]);
  const [loading, setloading] = useState([false]);
  

  let formvalidation  = async () => {
    setloading({ loading: true });
    let errorFlag = false;

    // input validation
    if (password.length == 0) {
      errorFlag = true;
      alert("password length");
      passwordErrorMessage({
        setpasswordErrorMessage: "Password is required feild",
      });
    } else if (password.length < 8 || password.length > 20) {
      errorFlag = true;
      alert("password 8 and 20");
      passwordErrorMessage({
        setpasswordErrorMessage: "Password should be min 8 char and max 20 char",
      });
    } else if (password !== confirmPassword) {
      errorFlag = true;
      
      passwordErrorMessage({setpasswordErrorMessage:"Passwoad and confirm password should be same."});
    }

    if (confirmPassword.length == 0) {
      errorFlag = true;
      alert("password conformpass length");
      confirmPasswordErrorMessage({
        setconfirmPasswordErrorMessage: "Confirm Password is required feild",
      });
    } else if (confirmPassword.length < 8 || confirmPassword.length > 20) {
      errorFlag = true;
      alert("conformpass length 8 and 20");
      confirmPasswordErrorMessage({
        setconfirmPasswordErrorMessage:
          "Password should be min 8 char and max 20 char",
      });
    }

    if (errorFlag) {
      console.log("errorFlag");

      /** Call Your API */
    } else {
      setloading({ loading: false });
    }
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.LoginLayout}>
          <View style={styles.LogoLayout}>
            <Text>{"Change Password"}</Text>
          </View>
          <View style={styles.inputLayout}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputLayout}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(cnfrompass) =>
                setconfirmPassword(cnfrompass)
              }
            />
            {/* {this.setconfirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.setconfirmPasswordErrorMessage}</Text>} */}
          </View>
          <View style={styles.inputLayout}>
            <Button onPress={() => formvalidation()} title="SUBMIT" />
          </View>
        </View>
      </ScrollView>
      {/* Show Your Loader */}
      {/* {
                    this.state.loading && <Loader />
                } */}
    </View>
  );
};
const styles = StyleSheet.create({
  LoginLayout: {
    flex: 1,
    padding: 20,
  },
  LogoLayout: {
    alignItems: "center",
    padding: 20,
  },
  inputLayout: {
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
  },
  textDanger: {
    color: "#dc3545",
  },
});
export default ChangePasswordScreen;
