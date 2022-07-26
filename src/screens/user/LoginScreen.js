import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from '../../styles';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

 
export default function LoginScreen({ navigation }) {
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    alert("Welcome User");
  } catch (error) {
    alert(error.message);
  }
};

const logout = async () => {
  await signOut(auth);
};




  return (
    <View style={styles.logincontainer}>
      <Image style={{ width: 100, height: 100, marginBottom: 10, marginTop: '10%', }}  source={{ uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png" }}/>
<Text style={styles.loginheading}>Tuckshop Admin Login</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry ={true}
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
      </View>
 
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onClick={login}>LOGIN</Text>
      </TouchableOpacity>

{/* TEMPORARY - Only to see if a user can successfully sign in */}
<Text>Signed in: {user?.email} </Text>
{/* If a user is signed in, their email will show */}


      <TouchableOpacity style={styles.signoutBtn}>
        <Text style={styles.signoutText} onClick={logout}> Sign Out </Text>
      </TouchableOpacity> 

      




 {/* <TouchableOpacity>
        <Text style={styles.home_button} onPress={() => navigation.navigate('Home')}>Back to home</Text>
      </TouchableOpacity> */}


    </View>
  );
}
 
