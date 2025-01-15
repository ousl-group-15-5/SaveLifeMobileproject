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
import { ScrollView } from "react-native-gesture-handler";

import SQLite from "react-native-sqlite-storage";

const LoginScreen = ({ navigation }) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [isSequireEntry, setisSequireEntry] = useState(true);

  //const for form validation
  const [data, setData] = React.useState({
    username: "",
    password: "",
    chechInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  /*
const handlepassword=(val)=>{
  if(val.trim().length>0){
    setData({
      ...data,
      isValidUser:true,

    });
  }else{
    setData({
      ...data,
      isValidUser:false,

    });
  }
}
    //this is change must apper here
function detailsEmpty(){
  UserName="";
  Password="";
}
*/
  //form validation

  loginUser = () => {
    if (UserName.length == 0 || Password.length == 0) {
      alert("Required field is missing");
      //navigation.navigate("Category");
    } else {
      var InsertApiURL = "http://10.0.2.2:80/api/login.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var dataobj = {};
      (dataobj.Username = UserName), (dataobj.Password = Password);

      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responceJSON) => {
          if (responceJSON == "ok") {
            alert("Incorrect username or password");
            //detailsEmpty();
          } else {
            navigation.navigate("Category");
            //detailsEmpty()
          }
        })
        //hndle exception
        .catch((error) => {
          alert("Error 001" + error);
        });
    }
  };

  return (
    <View style={styles.container3}>
      <ScrollView>
        <View>
          <Text style={styles.TextHead}>SAVE LIFE BLOOD BANK</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require("../images/blood-bank.webp")}
          />

          <Text style={styles.label2}>User Name</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Username) => setUserName(Username)}
          />

          <Text style={styles.label2}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={isSequireEntry}
            selectionColor={"#5188E3"}
            onChangeText={(Password) => setPassword(Password)}
          />
          <TouchableOpacity style={styles.RegisterBtn} onPress={()=>navigation.navigate("Category")}>
            <Text style={styles.RegisterText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.fixToTxt}>
           
            <TouchableOpacity style={styles.RegisterBtn1} onPress={() => navigation.navigate("FindAccount")}>
            <Text style={styles.RegisterText}>Find Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.RegisterBtn1} onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.RegisterText}>Registation</Text>
          </TouchableOpacity>

           
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    width: "100%",
    marginTop: "0%",
    backgroundColor: "#fff",
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
  btnstyle: {
    padding: 22,
    margin: 22,
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
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
    marginHorizontal: "28%",
  },
  RegisterBtn1: {
    width: "50%",
    borderRadius: 25,
    height: 40,
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

  TextBody: {
    fontSize: 12,
    textAlign: "justify",
    marginLeft: "0.99%",
    marginVertical: 8,
    marginHorizontal: 6,
    fontWeight: "bold",
    color: "red",
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

export default LoginScreen;
