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
import styles from '../styles';
 
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.logincontainer}>
      <Image style={{ width: 100, height: 100, marginBottom: 40, marginTop: '10%', }}  source={{ uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png" }}/>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.admin_button}>Admin login</Text>
      </TouchableOpacity>

 {/* <TouchableOpacity>
        <Text style={styles.home_button} onPress={() => navigation.navigate('Home')}>Back to home</Text>
      </TouchableOpacity> */}


    </View>
  );
}
 
