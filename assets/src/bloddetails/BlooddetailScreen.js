import { useRoute } from "@react-navigation/native";
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
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";

const BlooddetailScreen = ({navigation}) => {
  const route = useRoute();

  
  const [ageValue, setAgeValue] = useState('');
  const ageCatogary=[
    {Key:"Between 18-60 Years" , value: "Between 18-60 Years"},
    {Key:"Above 60 Years" , value: "Above 60 Years"},
  ];
  const [weightValue, setWeightValue] = useState('');
  const ageWeight=[
    {Key:"Between 50Kg to 75Kg" , value: "Between 50Kg to 75Kg"},
    {Key:"75Kg or more" , value: "75Kg or more"},
  ];


  const [bloodValue, setBloodValue] = useState('');
  const bldgroupctgry=[
    { Key: "A+", value: "A+" },
    { Key: "A-", value: "A-" },
    { Key: "B+", value: "B+" },
    { Key: "B-", value: "B-" },
    { Key: "AB+", value: "AB+" },
    { Key: "AB-", value: "AB-" },
    { Key: "O+", value: "O+" },
    { Key: "O-", value: "O-" },
  ];



  const [hemoglobinValue, setHemoglobinValue] = useState('');
  const hmgllvl = [
    { Key: "Men-13.0 g/dl ", value: "13.0 g/dl" },
    { Key: "Female-12.5 g/dl", value: "12.5 g/dl" },
  ];

  
  const DonorReg = () => {
    if (
     ageValue == '' || weightValue == '' || bloodValue ==''||hemoglobinValue==''
    ) {
      alert("Required field is missing");
    } else { 
      
      var InsertApiURL = "http://10.0.2.2:80/api/DonorRegister.php";

      //this contain header related component
      var headers = {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      };
      var dataobj = {};
      
        (dataobj.Name = route.params.name),
        (dataobj.Birth = route.params.selectdate),
        (dataobj.Address = route.params.address),
        (dataobj.Id = route.params.id),
        (dataobj.Number1 = route.params.number1),
        (dataobj.Number2 = route.params.number2),
        (dataobj.Donation = route.params.donation),
        (dataobj.Age = ageValue),
        (dataobj.Weight = weightValue),
        (dataobj.BloodType = bloodValue),
        (dataobj.Hemoglobinlvl = hemoglobinValue);
        
      
      
      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
        
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responce) => {
          alert(responce[0].Message);
          navigation.navigate("Category");
        })
        //hndle exception
        .catch((error) => {
          alert("Error " + error);
        });
    }
  };

  return (
    <View style={styles.container1}>
      <View style={styles.content}>
      <View style={{ zIndex: 5 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Age</Text>
          <SelectList
            setSelected={setAgeValue}
            data={ageCatogary}
            placeholder={"Select Age"}
          />
        </View>
      </View>

      <View style={{ zIndex: 3 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Weight</Text>
          <SelectList
            setSelected={setWeightValue}
            data={ageWeight}
            placeholder={"Select Weight"}
          />
        </View>
      </View>

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
          <Text style={styles.label}>Hemoglobin Level</Text>
          <SelectList
          hmgllvl
          setSelected={setHemoglobinValue}
          data={hmgllvl}
          placeholder={"Select Hemoglobin Level"}
           
          />
        </View>
      </View>
    </View>

      <TouchableOpacity style={styles.RegisterBtn}
      onPress={DonorReg}
      >
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  

  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "-50%",
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

  
});

export default BlooddetailScreen;
