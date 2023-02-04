import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import{setState}from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VirtualizedList,
  Button,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import Communications from "react-native-communications";
import { FlatList } from "react-native-gesture-handler";

const ContactdonorScreen = () => {
  const route = useRoute();

  const Phonenumber = "0701169644";
  const SmsText = "SMS for Blood donation request";
  
  var dataobj = {};
    dataobj.responcCtn = route.params.responce;
    //const obt = JSON.parse(route.params.responce);
    var responce = route.params.responce.map(function (item) {
      return {
        key: item.D_contactNum1,
        label: item.D_name,
      };
    });
    //setNumberofDonor(data);
    const numberOfDonor = Object.keys(responce).length;
    //setNumberofDonor(numberOfDonor);
    console.log(responce);
    
  //// ------------------------------------------
  // For showing Name and phone number 
    const Item = ({title}) => (
      <View style = {styles.ftcontanner}>
        <Text style = {styles.ftTextContanner}>{title}</Text>
      </View>
    );
    const Numbers = ({title}) => (
      <View style = {styles.ftcontanner}>
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => Communications.text(title)}
          >
            <Text style={styles.buttonTextStyle}>{title}</Text>
          </TouchableOpacity>
      </View>
    );
// --------------------------------------------End here 


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstContanner}>
        <View style={styles.firstDonorFindView}>
          <Text style={styles.textforAlert}>Alert</Text>

          <Text style={styles.numberOfDonor}>{numberOfDonor} Donor Found </Text>
        </View>

        {/* For view google map  */}
        <View style={styles.container}>
          <MapView
            style={styles.map}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: 6.9271,
              longitude: 79.8612,
              latitudeDelta: 0.09,
              longitudeDelta: 0.09,
            }}
          >
            
          </MapView>
        </View>
      </View>
      <View style={styles.callAndDonorContanner}>
      <View style={styles.callFunctionContanner}>
         {/* This one for passing name  */}
        <FlatList
        data = {responce} 
        renderItem = {({item}) => <Item title = {item.label}/>}
        inverted
        style = {styles.ftcontanners}
        />

         {/* This one for parsing PhoneNumber 

         Read me ---  
         In line 39 have a const function 
         const Item 
         Const Number 
         You can make a style in that part. 
         
         */}
        <FlatList
        data = {responce} 
        renderItem = {({item}) => <Numbers title = {item.key}/>}
        inverted
        style = {styles.ftcontanners2}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    padding: 10,
  },
  firstContanner: {
    flex: 2,
  },
  firstDonorFindView: {
    padding: 10,
    marginLeft: "3%",
    borderEndWidth: 12,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  textforAlert: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: "2%",
  },
  numberOfDonor: {
    fontSize: 20,
    marginLeft: "2%",
  },
  nameContanner:{
    marginRight:10,
    paddingRight:10
  },
  map: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },

  callAndDonorContanner: {
    flex: 1,
    flexDirection: "column",
  },
  callFunctionContanner: {
  
    justifyContent: "flex-start",
    paddingLeft: 5,
    
    
  },
  buttonStyle: {
    padding: 5,
    backgroundColor: "#FF1493",
    padding:'2%',
    borderColor:'black'
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    marginRight: "11%",
    

  },
  //this style  --  for flatList 
  
  ftcontanners:{
    fontWeight:"bold",
    marginBottom:"-6%"
  },
  ftcontanners2:{
    marginLeft:'50%',
    
  }
});
export default ContactdonorScreen;
