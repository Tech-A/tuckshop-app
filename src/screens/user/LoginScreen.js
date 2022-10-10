import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from '../../styles';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { IconButton } from 'react-native-paper';



export default function LoginScreen({ navigation }) {

  // sets login email and password variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({}); // Sets user state to be null/nothing (not logged in)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // Sets user to be current user (logged in user)
  });

  //Signs user in with stored email and password in firebase authentication
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigation.navigate('AdminHome');
      // redirect logged in user to admin screens
    } catch (error) {
      alert(error.message); // Response to wrong details
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

