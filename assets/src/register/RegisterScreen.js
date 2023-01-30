import { StatusBar } from "expo-status-bar";
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

import { SelectList } from "react-native-dropdown-select-list";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { allowsVoipAsync } from "expo-cellular";
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }) => {
  
 
 
const [clusteropn, setclusteropn] = useState("Ampara");
const [subbranch, setsubbranch] = useState("");
const catogaries = [
  { key: "Ampara", value: "Ampara" },
  { key: "Anuradhapura", value: "Anuradhapura" },
  { key: "Badulla", value: "Badulla" },
  { key: "Batticaloa", value: "Batticaloa" },
  { key: "CIM", value: "CIM" },
  { key: "CNTH", value: "CNTH" },
  { key: "Jaffna", value: "Jaffna" },
  { key: "Kalutara", value: "Kalutara" },
  { key: "Kamburugamuwa", value: "Kamburugamuwa" },
  { key: "Kandy", value: "Kandy" },
  { key: "Karapitiya", value: "Karapitiya" },
  { key: "Kurunegala", value: "Kurunegala" },
  { key: "NBC", value: "NBC" },
  { key: "Rathnapura", value: "Rathnapura" },
  { key: "Trincomalee", value: "Trincomalee" },
  { key: "Vavuniya", value: "Vavuniya" },

];
const subcatogary = {
  'Ampara':[
    { key: "Akkaraipattu", value: "Akkaraipattu" },
    { key: "Ampara", value: "Ampara" },
    { key: "Dehiatthakandiya", value: "Dehiatthakandiya" },
    { key: "Kalmunai AM(S)", value: "Kalmunai AM(S)" },
    { key: "Kalmunai Base(N)", value: "Kalmunai Base(N)" },
    { key: "Mahaoya", value: "Mahaoya" },
    { key: "Sammanthurai", value: "Sammanthurai" },
  ],
  'Anuradhapura':[
    { key: "Anuradhapura", value: "Anuradhapura" },
    { key: "Medirigiriya", value: "Medirigiriya" },
    { key: "Padaviya", value: "Padaviya" },
    { key: "Polonnaruwa", value: "Polonnaruwa" },
    { key: "Thambuttegama", value: "Thambuttegama" },
  ],
  'Badulla':[
    { key: "Badulla", value: "Badulla" },
    { key: "Bibila", value: "Bibila" },
    { key: "Diyatalawa", value: "Diyatalawa" },
    { key: "Mahiyanganaya", value: "Mahiyanganaya" },
    { key: "Monaragala", value: "Monaragala" },
    { key: "Welimada", value: "Welimada" },
    { key: "Wellawaya", value: "Wellawaya" },

  ],
  'Batticaloa':[
    { key: "Batticaloa", value: "Batticaloa" },
    { key: "Valachchenai", value: "Valachchenai" },
  ],
  'CIM':[
    { key: "Avissawella", value: "Avissawella" },
    { key: "CIM", value: "CIM" },
    { key: "Homagama", value: "Homagama" },
    { key: "Karawenella", value: "Karawenella" },

  ],
  'CNTH':[
    { key: "Chilaw", value: "Chilaw" },
    { key: "CNTH", value: "CNTH" },
    { key: "Gampaha", value: "Gampaha" },
    { key: "Kalpitiya", value: "Kalpitiya" },
    { key: "Marawila", value: "Marawila" },
    { key: "Negambo", value: "Negambo" },
    { key: "Puttalam", value: "Puttalam" },
    { key: "Wathupitiwala", value: "Wathupitiwala" },
    { key: "Welisara", value: "Welisara" },
  ],
  'Jaffna':[
    { key: "Jaffna", value: "Jaffna" },
    { key: "Killinochchi", value: "Killinochchi" },
    { key: "Mullaitivu", value: "Mullaitivu" },
    { key: "Point Pedro", value: "Point Pedro" },
    { key: "Thellippallai", value: "Thellippallai" },
  ],
  'Kalutara':[
    { key: "Horana", value: "Horana" },
    { key: "Kalutara", value: "Kalutara" },
    { key: "Kethumathie", value: "Kethumathie" },
    { key: "Panadura", value: "Panadura" },
  ],
  'Kamburugamuwa':[
    { key: "Hambanthota", value: "Hambanthota" },
    { key: "Kamburugamuwa", value: "Kamburugamuwa" },
    { key: "Kamburupitiya", value: "Kamburupitiya" },
    { key: 	"Matara", value: "Matara" },
    { key: "Tangalle", value: "Tangalle" },
    { key: "Thissamaharama", value: "Thissamaharama" },
  ],
  'Kandy':[
    { key: "Dambulla", value: "Dambulla" },
    { key: "Dikkoya", value: "Dikkoya" },
    { key: "Gampola", value: "Gampola" },
    { key: "Kandy", value: "Kandy" },
    { key: "Kegalle", value: "Kegalle" },
    { key: "Matale", value: "	Matale" },
    { key: "Mawanella", value: "Mawanella" },
    { key: "Nawalapitiya", value: "Nawalapitiya" },
    { key: "NuwaraEliya", value: "NuwaraEliya" },
    { key: "Peradeniya", value: "Peradeniya" },
    { key: "Rikillagaskada", value: "Rikillagaskada" },
    { key: "Warakapola", value: "Warakapola" },
  ],
  'Karapitiya':[
    { key: "Balapitiya", value: "Balapitiya" },
    { key: "Elpitiya", value: "Elpitiya" },
    { key: "Karapitiya", value: "Karapitiya" },
    { key: "Mahamodara", value: "Mahamodara" },
  ],
  'Kurunegala':[
    { key: "Dambadeniya", value: "Dambadeniya" },
    { key: "Kuliyapitiya", value: "Kuliyapitiya" },
    { key: "Kurunegala", value: "Kurunegala" },
    { key: "Nikaweratiya", value: "Nikaweratiya" },
  ],
  
  'NBC':[
    { key: "Accident Serv.", value: "Accident Serv." },
    { key: "CSHW", value: "CSHW" },
    { key: "CSTH", value: "CSTH" },
    { key: "DMH", value: "DMH" },
    { key: "IDH - Angoda", value: "IDH - Angoda" },
    { key: "LRH", value: "LRH" },
    { key: "Mulleriyawa", value: "Mulleriyawa" },
    { key: "NBC", value: "NBC" },
    { key: "NHSL", value: "NHSL" },
    { key: "SJGH - Kotte", value: "SJGH - Kotte" },
  ],
  'Rathnapura':[
    { key: "Balangoda", value: "Balangoda" },
    { key: "Embilipitiya", value: "Embilipitiya" },
    { key: "Kahawatta", value: "Kahawatta" },
    { key: "Rathnapura", value: "Rathnapura" },
  ],
  'Trincomalee':[
    { key: "Kantale", value: "Kantale" },
    { key: "Kinniya", value: "Kinniya" },
    { key: "Muthur", value: "Muthur" },
    { key: "Trincomalee", value: "Trincomalee" },
  ],
  'Vavuniya':[
    { key: "Chettikulam", value: "Chettikulam" },
    { key: "Mannar", value: "	Mannar" },
    { key: "Vavuniya", value: "Vavuniya" },
  ],
};
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmpassword, setConfirmpassword] = useState([]);
  const [mobileNumber, setmobileNumber] = useState([]);
  //const for form validation
  const [data, setData] = React.useState({
    confrmpass: '',
    chechInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidcmfPassword: true,
  });

  //form validation
  
  const handleValidUser = (val) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleValidPassword = (val) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };
  const handleValidcmfPassword = (val) => {
    if (val.trim().length > 0  || password == confirmpassword ) {
      setData({
        ...data,
        isValidcmfPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidcmfPassword: false,
      });
    }
  };

  const isValidSLMobileNumber = (number) => {
    return /^07[0-9]{8}$/.test(number);
  }
  //Db start-----------------
  //for insert value to userRegistation
  const bloodBankUserReg = () => {
     if(clusteropn ==''){
      alert('Please choose the cluster center')
    }
    
    else if(subbranch == ''){
      alert("Choose correct cluster center and blood bank");

    }else if(username.length == 0){
      alert("Please enter a user name with minimum of four characters");
    }
    else if (
       username.length < 4  ) {
      alert("Please enter a user name with minimum of four characters");
    }else if(password.length == 0){
      alert("Password areas cannot be empty")
    }
     else if(password.length < 6 ){
      alert("Password must be at least 6 characters long");
    }
    else if(password !== confirmpassword){
      alert("Password does not match. Confirm your password correctly");
    }else if(!isValidSLMobileNumber(mobileNumber)){
      alert("Enter valid mobile number (07* *** ****)")
    }
    else {
      // Variable for declare local Api path
      var InsertApiURL = "http://10.0.2.2:80/api/insert.php";

      //this contain header related component
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var dataobj = {};
      (dataobj.Cluster = clusteropn),
        (dataobj.Bloodbank = subbranch),
        (dataobj.Username = username),
        (dataobj.Password = password),
        (dataobj.Confirmpassword = confirmpassword);
        (dataobj.MobileNumber = mobileNumber);

      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responce) => {
          alert(responce[0].Message);
          navigation.navigate("Login");
        })
        //hndle exception
        .catch((error) => {
          alert("Wrong" + error);
        });
    }
  };

  return (
    <View style={styles.container3}>
     <ScrollView>
      <View>
        <Text style={styles.TextHead}>REGISTER BLOOD BANK</Text>
      </View>
      <View style={styles.content}>
        <View style={{ zIndex: 2 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Cluster Center</Text>
            <SelectList
              setSelected={setclusteropn}
              data={catogaries}
              placeholder={"Slect cluster center"}
              
            />
          </View>
        </View>

        <View style={{ zIndex: 1 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Blood Bank</Text>
            <SelectList
               setSelected={setsubbranch}
               data={subcatogary[clusteropn]}
               placeholder={"Slect cluster center"}
            />
          </View>
        </View>

        <Text style={styles.label2}>User Name</Text>
        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(Username) => setUsername(Username)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
        />
        {data.isValidUser ? null : 
        <Text>
          </Text>}

        <Text style={styles.label2}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          keyboardType="numeric"
          selectionColor={"#5188E3"}
          onChangeText={(Password) => setPassword(Password)}
          onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
        />
        {data.isValidPassword ? null : (
          <Text></Text>
        )}
        <Text style={styles.label2}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          keyboardType="numeric"
          onChangeText={(Confirmpassword) =>
            setConfirmpassword(Confirmpassword)
          }
          onEndEditing={(e) => handleValidcmfPassword(e.nativeEvent.text)}
        />
        {data.isValidcmfPassword ? null : (
          <Text></Text>
        )}
         <Text style={styles.label2}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          secureTextEntry={false}
          selectionColor={"#5188E3"}
          onChangeText={(MobileNumber) =>
            setmobileNumber(MobileNumber)
          }
          
        />
       
      </View>
    
      <View>
        <TouchableOpacity style={styles.RegisterBtn} onPress={bloodBankUserReg}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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

  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-50%",
  },

  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-120%",
  },

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
export default RegisterScreen;
