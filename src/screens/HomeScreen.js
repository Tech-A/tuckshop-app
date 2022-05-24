import React from "react";
import { Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Button, View, Text } from 'react-native';
import styles from './src/styles';

export default function HomeScreen({ navigation }) {
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