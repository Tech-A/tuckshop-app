import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, TextInput, SafeAreaView, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styles from '../styles';

export default function LoginScreen({ navigation }) {
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