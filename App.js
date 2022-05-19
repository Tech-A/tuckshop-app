// In App.js in a new project

import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Button, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './src/styles';
import { useState, useEffect } from "react";
import { db1 } from './src/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import MenuScreen from './src/components/MenuScreen';




function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.div1}>

      <Image source={{uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png"}} 
      style={{ width: 150, height:150, marginTop:20, }} /> 
      
      <Text style={styles.title}>
       Marist College Tuckshop
      </Text>


     </View>
     <View style={styles.container2}>
        
   <View style={styles.div2}>
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Menu')}>
 <Text style={styles.menu}>Menu</Text>
   </TouchableOpacity>
    
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Preorder')}>
 <Text style={styles.menu}>Preorder</Text>
   </TouchableOpacity>
 
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Info')}>
 <Text style={styles.menu}>Information</Text>
   </TouchableOpacity>
 </View>

<View style={styles.div3}>
   <Text style={styles.welcome}>Welcome to the Marist College Tuckshop! </Text>
  <Text style={styles.welcome}> The Tuckshop is open everyday in Break 1 and 2. Lorem ipsum ... Click updates for more information.</Text>
  <Text style={styles.welcome}> You can also check out the Menu or Preorder now!</Text>
 </View>
 
 </View>
   </SafeAreaView>
  );
}




// function MenuScreen({ navigation }) {
//   const [menu, setMenu] = useState([]);
//   const menuCollectionRef = collection(db1, "menu");

//   useEffect(() => {
//     const getMenu = async () => {
//       const data = await getDocs(menuCollectionRef);
//       setMenu(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getMenu();
//   }, []);
// return (
//   <View style={styles.App}> 
//     {menu.map((menu) => { 
//       return (
    
//       <View>
//         <Text>Food: {menu.food}</Text>
//         <Text>Cost: {menu.cost}</Text>
//       </View>
//       );
//     })} 
//     </View>
//     );
// }

  
  
  


function ChoicesScreen({ navigation }) {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25, padding: 20, textAlign:'center' }}>How would you like to preorder?</Text>
      <TouchableOpacity
   style={styles.choicesbutton}
   onPress={() => navigation.navigate('Login')}>
 <Text style={styles.choicestext}>New/Returning customer</Text>
 <Text style={styles.choicessubtext}>Save your login details and preorder</Text>
   </TouchableOpacity>

   <TouchableOpacity
   style={styles.choicesbutton}
   onPress={() => navigation.navigate('Guest')}>
 <Text style={styles.choicestext}>One-time customer</Text>
 <Text style={styles.choicessubtext}>Preorder as guest</Text>
   </TouchableOpacity>
<Text></Text>

      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}



function InfoScreen({ navigation }) {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.Infoheader}>Information/Updates about the Tuckshop!</Text>
      
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}



function LoginScreen({ navigation }) {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return (  
      <><View style={styles.logincontainer}>
        <Image source={{ uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png" }}
          style={{ width: 100, height: 100, marginBottom: 40, }} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>


      </View>
      <View>
          <TouchableOpacity>
            <Text style={styles.adminbutton}>Admin Login</Text>
          </TouchableOpacity>
        </View></>
    );
  }
  



function GuestScreen({ navigation }) {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fill out this form </Text>
      <Text></Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Preorder" component={ChoicesScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







