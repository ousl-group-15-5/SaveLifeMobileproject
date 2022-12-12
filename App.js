import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
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
import AddDonnerItem from './assets/Components/AddDonnerInfo'
import Login from './assets/Components/login'

export default function App() {
  

  return (
    <View Style ={styles.container}>
        <AddDonnerItem/>
      <StatusBar style="auto"/>
    </View>
    );
   
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   alignItems:'center',
   justifyContent:'center'

  },
 
});
