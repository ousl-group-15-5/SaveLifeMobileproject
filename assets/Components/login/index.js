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

const LoginPage = () =>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Blood group 1", value: "Blood group 1" },
    { label: "Blood group 2", value: "Blood group 2" },
  ]);


    return  (
        <ScrollView showsVerticalScrollIndicator={false}>
        {/*Brand view */}
        <View style={styles.firstContanner}>
          <ImageBackground
            style={{
              height: Dimensions.get("window").height / 2.2,
              opacity: 0.9,
            }}
          >
            <View style={styles.bview}>
              <Image
                source={{
                  uri: "https://i.ibb.co/2KqtYnV/blood-donation-1.png",
                  method: "POST",
                  headers: {
                    Pragma: "no-cache",
                  },
                  body: "Your Body goes here",
                }}
                style={styles.FrontImageContanner}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottm}>
          <View style={{ padding: 40 }}>
            <View style={{ marginTop: 1 }}>
              <View style={styles.inview}>
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
                  placeholder={"Email address"}
                  placeholderTextColor={"black"}
                  style={styles.txtinp}
                />
                <TextInput
                  placeholder={"Password"}
                  secureTextEntry={true}
                  placeholderTextColor={"black"}
                  style={styles.pass}
                />
              </View>
  
              
  
              <TouchableOpacity style={styles.tuchble_button}>
                <Text style={styles.sing_button}>Sing In</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.reg}>
              {" "}
              Don't have an account{" "}
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {" "}
                Join with us
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    firstContanner: {
      flex: 1,
      paddingBottom: "1%",
      backgroundColor: "#ffffff",
    },
    bottm: {
      flex: 2,
      paddingTop: 10,
      backgroundColor: "#ff8080",
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
    },
    dropDown: {
      borderColor: "#ffffff",
      borderBottomWidth: 1,
      backgroundColor: "#ff8080",
      paddingHorizontal: 13,
      paddingLeft: 14,
    },
    
    reg: {
      textAlign: "center",
      color:'#ffe6e6',
      fontSize: 20,
      marginTop: 60,
    },
    inview: {
      width: "110 %",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    txtinp: {
      width: "95 %",
      borderBottomWidth: 1,
      color: "#fff",
      borderColor: "#fff",
      height: 53,
      borderRadius: 10,
      fontSize: 15,
      paddingLeft: 5,
      marginTop: 30,
    },
    pass: {
      width: "95 %",
      borderBottomWidth: 1,
      color: "#fff",
      borderColor: "#fff",
      height: 53,
      borderRadius: 10,
      fontSize: 15,
      paddingLeft: 5,
      marginTop: 30,
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
  
    // After First Implementation
    FrontImageContanner: {
      width: "100%",
      height: "100%",
    },
  });
  
  export default LoginPage;