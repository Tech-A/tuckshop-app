import React from "react";
import { Image, TouchableOpacity, TextInput, SafeAreaView, Button, View, Text } from 'react-native';
import styles from '../../styles';


export default function HomeScreenA({ navigation }) {


  return (
<SafeAreaView style={styles.container}>


      <View style={styles.div}>
        <TouchableOpacity onPress={() => navigation.replace('Home')} >
          <Text style={styles.loginbtn}>Logout</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.div1}>

        <Image source={{ uri: "https://photos.schoolpoint.co.nz/school/70/marist_logo.png" }}
          style={{ width: 150, height: 150, marginTop: 20, }} />

        <Text style={styles.title}>
          Welcome,  Admin.
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
          <Text style={styles.btntexta}>Update Newsfeed</Text>
        </TouchableOpacity>
        
      </View>


</SafeAreaView>
  );
}