import React, { useState, useEffect } from "react";
import { SafeAreaView, Button, View, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../styles';
import { db2 } from '../firebase-config';
import { ScrollView } from "react-native-gesture-handler";




export default function InfoScreen({ navigation }) {
  const [updates, setUpdates] = useState([]);
  const updatesCollectionRef = collection(db2, "updates")
  useEffect(() => {
  const getUpdates = async () => {
    const data = await getDocs(updatesCollectionRef);
    setUpdates(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  getUpdates();
}, []);

    return ( 
  
        <View style={styles.Infocontainer}>
  <SafeAreaView>
    <ScrollView>
          <View style={styles.Infoheadercontainer}>
            <Text style={styles.Infoheader}>About the Tuckshop</Text>
          </View>
          
          <View style={styles.GeneralInfocontainer}> 
            <Text style={styles.infoheader2}>General Info</Text>
            <Text style={styles.GeneralInfoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ligula hendrerit, lobortis turpis quis, tempus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ac neque nec urna consectetur rhoncus. Donec finibus, dui tempus blandit laoreet, lectus elit dignissim sapien, sodales finibus erat lectus vitae felis. Aliquam sagittis placerat cursus. Etiam viverra mauris at mattis euismod. Proin convallis gravida lectus, sed placerat massa dictum id. Nunc vitae ipsum nec metus tristique tincidunt. Integer vestibulum nunc erat, sit amet gravida arcu accumsan aliquam.</Text>
          </View>


          <View style={styles.faqcontainer}> 
            <Text style={styles.infoheader2}>FAQS</Text>

            <Text style={styles.faqquestion}>Lorem ipsum dolor sit amet?</Text>
            <Text style={styles.faqanswer}>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet </Text>

            <Text style={styles.faqquestion}>Lorem ipsum dolor sit amet?</Text>
            <Text style={styles.faqanswer}>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet </Text>

            <Text style={styles.faqquestion}>Lorem ipsum dolor sit amet?</Text>
            <Text style={styles.faqanswer}>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet </Text>

            <Text style={styles.faqquestion}>Lorem ipsum dolor sit amet?</Text>
            <Text style={styles.faqanswer}>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet </Text>

            <Text style={styles.faqquestion}>Lorem ipsum dolor sit amet?</Text>
            <Text style={styles.faqanswer}>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet </Text>

          </View>

          <View> 
            <Text style={styles.infoheader2}>UPDATES</Text>
            <View style={styles.updatescontainer}>
              <ScrollView>
            
     {updates.map((updates) => { 
      return (
    
        <View style={styles.update}>

        <Text>{updates.update}</Text>
        <Text>Date updated: {updates.date}</Text>
        
        </View>
       
      );
    })}  
    </ScrollView>
    </View>
    </View>
    </ScrollView>
  </SafeAreaView>
        </View>
      
      );
 }
