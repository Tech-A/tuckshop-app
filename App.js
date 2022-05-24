import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Button, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState, useEffect } from "react";
import { db1 } from './src/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import styles from './src/styles';
import MenuScreen from './src/screens/MenuScreen';
import LoginScreen from './src/screens/LoginScreen';
import InfoScreen from './src/screens/InfoScreen';


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
   <View style={styles.div2}>
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Menu')}>
 <Text style={styles.menu}>Menu</Text>
   </TouchableOpacity>
    
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Login')}>
 <Text style={styles.menu}>Preorder</Text>
   </TouchableOpacity>
 
   <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate('Info')}>
 <Text style={styles.menu}>Information</Text>
   </TouchableOpacity>
 </View>
   </SafeAreaView>
  );
}







const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* <Stack.Screen name="Preorder" component={ChoicesScreen} /> */}
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Guest" component={GuestScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







