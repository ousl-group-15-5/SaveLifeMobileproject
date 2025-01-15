import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const FindAccount = ({ navigation }) => {

 

    const [userName, setUsername] = useState(null);
    const [phoneNumber , setPhoneneumber] = useState(null);

    const navigations = useNavigation();

    const renext=()=>{
    navigations.navigate('Forgot Password',{
      userName:userName,
     
    });
  }

//For find details on DB
const findUser = () =>{
    if(userName == '' || phoneNumber == ''){
        alert("required field are missing");

    }else{
        var InsertApiURL = "http://10.0.2.2:80/api/fogetpasswordvalidation.php";

      var headers ={
        'Accept': 'application/json',
        'Content-Type':'application/json'
      };

      var dataobj ={}
      dataobj.Username=userName,
      dataobj.MobileNumber=phoneNumber;
      
     
      fetch(InsertApiURL,
        {
          method:'POST',
          headers:headers,
          body:JSON.stringify(dataobj)
        }
        )
        //whether output api json or not
        .then((responce)=> responce.json())
        .then((responceJSON)=>
        {
          if(responceJSON == 'ok'){
            alert('Data is not match ');
          }else{
            navigation.navigate("Forgot Password");
            renext();
            
          }
        }
        )
        //hndle exception 
        .catch((error)=>
        {
          alert("Error 001"+ error);
        })
     


    }
}



  return (
    <View style={styles.container}>
        
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../images/Fdonorss.png")}
        />
        <ScrollView>
        <Text style={styles.label2}>Your username</Text>
        <TextInput
          style={styles.input}
          
          onChangeText={(Username) => setUsername(Username)}
          selectionColor={"#5188E3"}
        />
        <Text style={styles.label2}>Mobile Phone Number</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(phoneNumber) => setPhoneneumber(phoneNumber)}
          selectionColor={"#5188E3"}
        />
        <TouchableOpacity style={styles.RegisterBtn } onPress={renext}>
          <Text style={styles.RegisterText}>Find</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },

 

  TextHead: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: "1%",
  },
  label2: {
    marginHorizontal: 10,
    marginBottom: 15,
    fontWeight: "bold",
  },
  image: {
    width: "40%",
    height: "40%",
    marginHorizontal: "30%",
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
  RegisterText:{
    color:'white',
    text:'bold',
    fontSize:18
  },
});
export default FindAccount;
