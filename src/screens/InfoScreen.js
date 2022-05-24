import React from "react";
import { SafeAreaView, Button, View, Text } from 'react-native';
import styles from '../styles';


export default function InfoScreen({ navigation }) {
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.Infoheader}>Information/Updates about the Tuckshop!</Text>
          
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
      );
 }
