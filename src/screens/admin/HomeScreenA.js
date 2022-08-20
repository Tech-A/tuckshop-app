import React from "react";
import { Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Button, View, Text } from 'react-native';
import styles from '../../styles';
// import { signOut } from "firebase/auth";
// import { auth } from '../../firebase-config';

export default function HomeScreenA({ navigation }) {
  // const logout = async () => {
  //   await signOut(auth);
  //   navigation.navigate('Home');
  // };
    

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.div}>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')} >
            <Text style={styles.loginbtn}>Logout</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.div1}>
        
          <Image source={{uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png"}} 
          style={{ width: 150, height:150, marginTop:20, }} /> 
          
          <Text style={styles.title}>
           Welcome, Admin.
          </Text>
    
    
         </View>
       <View style={styles.div2}>
       <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate('AdminMenu')}>
     <Text style={styles.btntexta}>Menu</Text>
       </TouchableOpacity>
        
     
       <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate('AdminInfo')}>
     <Text style={styles.btntexta}>Update tuckshop information</Text>
       </TouchableOpacity>
     </View>
       </SafeAreaView>
      );
}