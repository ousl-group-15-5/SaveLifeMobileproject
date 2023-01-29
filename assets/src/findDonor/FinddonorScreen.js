import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";

import { ScrollView } from "react-native-gesture-handler";

const FinddonorScreen = ({ navigation }) => {
  const [bloodValue, setBloodValue] = useState("");

  const bldgroupctgry = [
    { Key: "A+", value: "A+" },
    { Key: "A-", value: "A-" },
    { Key: "B+", value: "B+" },
    { Key: "B-", value: "B-" },
    { Key: "AB+", value: "AB+" },
    { Key: "AB-", value: "AB-" },
    { Key: "O+", value: "O+" },
    { Key: "O-", value: "O-" },
  ];

  const [locationValue, setLocationValue] = useState("");
  const locationctgry = [
    { Key: "Akkaraipattu", value: "Akkaraipattu" },
    { Key: "Ampara", value: "Ampara" },
    { Key: "Batticaloa", value: "Batticaloa" },
    { Key: "Badulla", value: "Badulla" },
    { Key: "Colombo", value: "Colombo" },
    { Key: "Dambulla", value: "Dambulla" },
    { Key: "Dikkoya", value: "Dikkoya" },
    { Key: "Gampaha", value: "Gampaha" },
    { Key: "Gampola", value: "Gampola" },
    { Key: "Homagama", value: "Homagama" },
    { Key: "Horana", value: "Horana" },
    { Key: "Jaffna", value: "Jaffna" },
    { Key: "Kandy", value: "Kandy" },
    { Key: "Kegalle", value: "Kegalle" },
    { Key: "Killinochchi", value: "Killinochchi" },
    { Key: "Mannar", value: "Mannar" },
    { Key: "NuwaraEliya", value: "NuwaraEliya" },
    { Key: "Polonnaruwa", value: "Polonnaruwa" },
    { Key: "Ratnapura", value: "Ratnapura" },
    { Key: "Trincomalee", value: "Trincomalee" },
    { Key: "Vavuniya", value: "Vavuniya" },
  ];

  //declare an array for save the databace responce
  var responcearr = [];

  const navigations = useNavigation();

  const renext = () => {
    navigations.navigate("Contact Donor", {
      responce: responcearr,
    });
  };

  const findDonor = () => {
    if (bloodValue == "" ) {
      alert("Please choose required blood group");
    }else if(locationValue == ''){
      alert("Please choose location");
    } 
    else {
      var InsertApiURL = "http://10.0.2.2:80/api/FindDonorDetail.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var dataobj = {};
      (dataobj.BloodGropub = bloodValue), (dataobj.Location = locationValue);

      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responceJSON) => {
          if (responceJSON == "ok") {
            alert("Maching blood group not found");
          } else {
            //databace responce include this array
            responcearr = responceJSON;
            //call the renext function for goto next page with result data
            renext();
          }
        })
        //hndle exception
        .catch((error) => {
          alert("Error 001" + error);
        });
    }
  };

  return (
    <View style={styles.container2}>
      <View style={{ zIndex: 2 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Blood Group</Text>
          <SelectList
            setSelected={setBloodValue}
            data={bldgroupctgry}
            placeholder={"Select Blood Group"}
          />
        </View>
      </View>

      <View style={{ zIndex: 1 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Location</Text>
          <SelectList
            setSelected={setLocationValue}
            data={locationctgry}
            placeholder={"Select Location"}
          />
        </View>
      </View>

      <Button title="FIND DONOR" onPress={findDonor} />

      <MapView
        style={styles.map}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 7.8731,
          longitude: 80.7718,
          latitudeDelta: 3.0,
          longitudeDelta: 3.0,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.8677, longitude: 79.8766 }}
          title={"Colombo"}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "1%",
  },

  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  content: {
    width: "90%",
    marginTop: "10%",
  },
  content2: {
    width: "90%",
    marginTop: "0.5%",
  },

  label2: {
    marginHorizontal: 10,
    marginBottom: 15,
    fontWeight: "bold",
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
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
    marginHorizontal: "2%",
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

  TextBody: {
    fontSize: 12,
    textAlign: "justify",
    marginLeft: "0.99%",
    marginVertical: 8,
    marginHorizontal: 6,
    fontWeight: "bold",
    color: "red",
  },
  logo: {
    marginBottom: 30,
    width: 300,
    height: 300,
    marginTop: "-20%",
    marginHorizontal: "10%",
  },

  img: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: "5%",
    marginLeft: "-40%",
  },

  dropdownAge: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: "93%",
  },
  dropdown: {
    borderColor: "#B7B7B7",
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
  secondcontanner: {
    flex: 2,
    margin: "5%",
  },
  map: {
    width: "100%",
    height: "70%",
  },
});

export default FinddonorScreen;
