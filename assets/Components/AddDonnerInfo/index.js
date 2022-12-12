import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Icon,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddDonneItem = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Blood group 1", value: "Blood group 1" },
    { label: "Blood group 2", value: "Blood group 2" },
  ]);
  return (
    <View>
      <View style={styles.firstParameeter}>
        <Text style ={{textAlign:'center'}}>Add Donor</Text>
      <View style={styles.inview}>
               
                <TextInput
                  placeholder={"Name"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"Date of birth"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"National ID Number"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"Address"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"Contact Number 1 "}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"Contact Number 2"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  
                  style={styles.dropDown}
                />
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  
                  style={styles.dropDown}
                />
                <TextInput
                  placeholder={"Last Blood donation"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                
              </View>

      </View>
      <View  style ={styles.Secondparameeter}>
        <ImageBackground
         
           source={{
             uri: "https://i.ibb.co/jMqHKqV/Untitled-design-1.png",
             method: "POST",
             headers: {
               Pragma: "no-cache",
             },
             body: "Your Body goes here",
           }}
           style={styles.FrontImageContanner}
           
         
        >
          <View>
          <TouchableOpacity style={styles.tuchble_button}>
                <Text style={styles.sing_button}>Next</Text>
              </TouchableOpacity>
          </View>
          
          <View style={styles.bview}>
          
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  firstParameeter:{
    paddingTop:'10%',
    
  },
  inview:{
    paddingLeft:'5%',
  },
  txtinp: {

    width: "95 %",
    borderBottomWidth: 1,
    color: "#fff",
    borderColor: "black",
    height: 20,
    borderRadius: 10,
    fontSize: 15,
    paddingLeft: 10,
    marginTop: 30,
  },
  dropDown: {
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    paddingHorizontal: 13,
    paddingLeft: 14,
  },
  Secondparameeter:{
    flex:3
  },
  FrontImageContanner: {
   
    width: "100%",
    height: "100%",
    
  },
  tuchble_button: {
    width: "50%",
    color: "",
    height: 52,
    backgroundColor: "#cc6600",
    borderRadius: 10,
    marginLeft: 90,
    marginTop: 30,
  },
  sing_button: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 9,
    color: "#fff",
  },
});

export default AddDonneItem;
