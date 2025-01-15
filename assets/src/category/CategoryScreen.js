import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const CategoryScreen = ({ navigation }) => {
  //code
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.RegisterBtn}
          onPress={() => navigation.push("Donor Profile")}
        >
          <Text style={styles.RegisterText}>Add Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.RegisterBtn}
          onPress={() => navigation.push("Find Donor")}
        >
          <Text style={styles.RegisterText}>Find Donor</Text>
        </TouchableOpacity>

        
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={require("../images/image1.png")} />
        <Image style={styles.img} source={require("../images/image2.png")} />
        <Image style={styles.img} source={require("../images/image3.png")} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.TextBody}>
          100% of Sri Lankan blood donors are voluntory non rermunerated donors. Your precious donation of blood can save as many as 3 lives.  You can donate blood in every 4 months time.
        </Text>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

 
  imageContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 60,
  },
 
  
  
  

  text: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 20,
    marginTop: "-20%",
  },

  TextHead: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: "1%",
  },

  image: {
    marginBottom: 30,
    width: 200,
    height: 200,
    marginHorizontal: "20%",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: "bold",
    borderColor: "#B7B7B7",
  },

  RegisterBtn: {
    width: "45%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
    marginHorizontal: "2%",
  },
  RegisterText:{
    color:'white',
    text:'bold',
    fontSize:18
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-30%",
  },
  fixToTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  infoContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth:1,
    borderStyle:"dotted",
    padding:3,
    margin:15,
    borderRadius:20,
    shadowColor:'black'

  },

  TextBody: {
    fontSize: 20,
    color: "red",
    textAlign: "justify",
    textShadowColor:'black',
    marginBottom: 10,
    lineHeight:30
    
    
  },
  logo: {
    marginBottom: 30,
    width: 300,
    height: 300,
    marginTop: "-20%",
    marginHorizontal: "10%",
  },

  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },

  dropdownAge: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: "93%",
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  placeholderStyles: {
    color: "black",
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
    fontWeight: "bold",
  },

  inputView1: {
    backgroundColor: "#FFC0CB",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },













  
});
export default CategoryScreen;
