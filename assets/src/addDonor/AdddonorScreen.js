import { useNavigation } from "@react-navigation/native";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from "react-native-gesture-handler";

const AdddonorScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [donation, setDonation] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [selectdate, setselectdate] = useState("Select Date");
  const [donorDate, setdonorDate] = useState("Last Blood Date");

  const navigations = useNavigation();

  const renext = () => {
    if (name == "" ) {
      alert("Please add the donor name");
    } else if (selectdate == "Select Date" || selectdate == "") {
      alert("Please add the donor Birthday");
    } else if (address == "") {
      alert("Please add the donor Address");
    } else if (id == "") {
      alert("Please add the donor NIC number");
    } else if (!isValidNIC(id)) {
      alert("Please enter valid NIC ");
    } else if (number1 == "" || !isValidSLMobileNumber(number1)) {
      alert("Please add valid contact number");
    } else if (number2 == "" || !isValidSLMobileNumber(number2)) {
      alert("Please add valid contact number");
    } else if (number1 == number2) {
      alert("Contact Number cant be same");
    }
    else if (donorDate == "Last Blood Date" || donorDate == "") {
      alert("Please add the Last Blood donation");
    }  else {
      navigations.navigate("Donor Blood Detail", {
        name: name,
        selectdate: selectdate,
        address: address,
        id: id,
        number1: number1,
        number2: number2,
        donation: donorDate,
      });
    }
  };

  const isValidNIC = (nic) => {
    return /^[0-9]{9}[vVxX]$/.test(nic) || /^[0-9]{12}$/.test(nic);
  };
  const isValidSLMobileNumber = (number) => {
    return /^07[0-9]{8}$/.test(number);
  }
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const cc = new Date(date);
    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    //console.log(); // "1/28/2023"
    setselectdate(cc.toLocaleDateString("en-us", dateOptions));

    hideDatePicker();
  };

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

  const handleConfirm1 = (date) => {
    const cc = new Date(date);
    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    //console.log(); // "1/28/2023"
    setdonorDate(cc.toLocaleDateString("en-us", dateOptions));

    hideDatePicker1();
  };

//age must be up to 18 years 
const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);


//for lastblood donation date chnage to eight week past

const eightWeeksAgo = new Date();
eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56);


  return (
    <ScrollView>
      <View style={styles.container3}>
        <View style={styles.content2}>
          <Text style={styles.label2}>Donor Name</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Name) => setName(Name)}
          />

          <Text style={styles.label2}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              showDatePicker();
            }}
          >
            <Text style={styles.Dinput}>{selectdate}</Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={eighteenYearsAgo}
          />

          <Text style={styles.label2}>Donor Address</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Address) => setAddress(Address)}
          />

          <Text style={styles.label2}>National ID Number</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Id) => setId(Id)}
          />

          <Text style={styles.label2}>Contact Number 1</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            selectionColor={"#5188E3"}
            onChangeText={(Number1) => setNumber1(Number1)}
          />

          <Text style={styles.label2}>Contact Number 2</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            selectionColor={"#5188E3"}
            onChangeText={(Number2) => setNumber2(Number2)}
          />

          <Text style={styles.label2}>Last Blood Donation</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              showDatePicker1();
            }}
          >
            <Text style={styles.Dinput}>{donorDate}</Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible1}
            mode="date"
            onConfirm={handleConfirm1}
            onCancel={hideDatePicker1}
            maximumDate={eightWeeksAgo}
          />




        </View>

        <Button title="NEXT" onPress={() => renext()} />
      </View>
    </ScrollView>
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
  Dinput: {
    fontSize: 15,
    textAlign: "auto",
    marginTop: 10,
    padding: 2,
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

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: "bold",
    borderColor: "#B7B7B7",
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
});
export default AdddonorScreen;
