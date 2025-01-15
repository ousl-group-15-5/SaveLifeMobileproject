import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginScreen from "./assets/src/login/LoginScreen.js";
import RegisterScreen from "./assets/src/register/RegisterScreen.js";
import PasswordScreen from "./assets/src/passwords/PasswordScreen.js";
import CategoryScreen from "./assets/src/category/CategoryScreen.js";
import AdddonorScreen from "./assets/src/addDonor/AdddonorScreen.js";
import BlooddetailScreen from "./assets/src/bloddetails/BlooddetailScreen.js";
import FinddonorScreen from "./assets/src/findDonor/FinddonorScreen.js";
import ContactdonorScreen from "./assets/src/contactDonor/ContactdonorScreen.js";
import FindAccount from "./assets/src/passwords/FindAccount.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegisterScreen} />
          <Stack.Screen name="Forgot Password" component={PasswordScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Donor Profile" component={AdddonorScreen} />
          <Stack.Screen name="Donor Blood Detail" component={BlooddetailScreen} />
          <Stack.Screen name="Find Donor" component={FinddonorScreen} /> 
          <Stack.Screen name="Contact Donor" component={ContactdonorScreen} /> 
          <Stack.Screen name="FindAccount" component={FindAccount} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
