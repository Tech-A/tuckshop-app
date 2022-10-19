import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { IconButton } from 'react-native-paper';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';
import styles from '../../styles';


export default function LoginScreen({ navigation }) {

  // Email and password for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // User state: User is not logged in
  const [user, setUser] = useState({}); 

  // User state: User is logged in
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); 
  });

  // Sign user in with stored email and password in firebase authentication
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      // Now redirect logged in user to admin screens
      navigation.navigate('AdminHome');
      
    } // Response to wrong details
    catch (error) {
    alert(error.message); 
    }
  };






  return (
    <View style={styles.logincontainer}>
      <Image style={{ width: 100, height: 100, marginBottom: 10, marginTop: 10, }} source={{ uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png" }} />
      <Text style={styles.loginheading}>Tuckshop Admin Login</Text>
      <Text style={styles.loginheadingwarning}>Warning: case-sensitive! (check for unnecessary spaces etc) </Text>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
          setLoginEmail(text);
          }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(pass) => {
          setLoginPassword(pass);
          }}
        />
      </View>


      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <IconButton
        icon="home"
        size={30}
        onPress={() => navigation.navigate('Home')}
      />



    </View>
  );
}
