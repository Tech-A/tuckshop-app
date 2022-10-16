import React, { useState, useEffect } from "react";
import { View, Text, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../../styles';
import { db2 } from '../../firebase-config';
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from 'react-native-paper';



export default function InfoScreen({ navigation }) {

  const updatesCollectionRef = collection(db2, "updates") // Gets update database from firebase

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const getUpdates = async () => {
      const data = await getDocs(updatesCollectionRef); // Displays data from updates database in firebase
      setUpdates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUpdates();
  }, []);

  return (

    
<SafeAreaView>
    <ScrollView>

        <View style={styles.Infocontainer}>

          <IconButton
            icon="home"
            size={30}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />

          <View style={styles.Infoheadercontainer}>
            <Text style={styles.Infoheader}>Our Tuckshop</Text>
          </View>


          <Image style={styles.image5}
            source={{
              uri: 'https://www.stmargarets.qld.edu.au/Images/UserUploadedImages/520/tuckshop%20menu.jpg',
            }}
          />


          <View style={styles.GeneralInfocontainer}>
            <Text style={styles.infoheader2}>General Info</Text>
            <Text style={styles.GeneralInfoText}>The tuckshop is a place for students to buy their lunch during school, with a selection of foods available everyday. It is open every break, and located near the school library.</Text>
          </View>


          <View style={styles.faqcontainer}>
            <Text style={styles.infoheader2}>FAQS</Text>

            <Text style={styles.faqquestion}>When does the tuckshop open?</Text>
            <Text style={styles.faqanswer}>Tuckshop is open from 8am-2.10pm Mon-Fri. You can only buy during the morning, break 1 and break 2</Text>

            <Text style={styles.faqquestion}>Where is the tuckshop?</Text>
            <Text style={styles.faqanswer}>The tuckshop is located near the shed/garden behind the library and near the science classes.</Text>

            <Text style={styles.faqquestion}>What is the cost range of the tuckshop?</Text>
            <Text style={styles.faqanswer}>The tuckshop food ranges from $1.00-$7.00</Text>

            <Text style={styles.faqquestion}>What are the methods of paying available (ie. credit card, cash) </Text>
            <Text style={styles.faqanswer}>Tuckshop accepts multiple methods of payment - credit card, EFTPOS, cash.</Text>

            <Text style={styles.faqquestion}>Who can go to the tuckshop?</Text>
            <Text style={styles.faqanswer}>The tuckshop is open to all students.</Text>

            <Text style={styles.faqquestion}>Do they offer any special dietary options? (eg vegetarian, gluten free)</Text>
            <Text style={styles.faqanswer}>Yes</Text>

            <Text style={styles.faqquestion}>How do you pre-order?</Text>
            <Text style={styles.faqanswer}>Online or can come before school and knock on the window. Pre-orders must be before 8.30am. </Text>
          </View>


          <View>

            <Text style={styles.updatesheader}>NEWSFEED</Text>
            <Text style={styles.updatessubheader}>See the latest news from the tuckshop!</Text>
            <View style={styles.updatescontainer}>

              <ScrollView>

                {updates.map((updates) => {
                  return (

                    <View style={styles.update}>

                      <Text style={styles.updatetext}>{updates.update}</Text>
                      <Text>Date updated: {updates.date}</Text>

                    </View>

                  );
                })}
              </ScrollView>
              
            </View>

          </View> 

        </View>
    </ScrollView>
</SafeAreaView>
   

  );
}
