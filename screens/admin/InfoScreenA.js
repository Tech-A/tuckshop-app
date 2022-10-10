import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import styles from '../../styles';
import { db2 } from '../../firebase-config';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Portal, Provider, IconButton } from 'react-native-paper';
import { Input } from 'react-native-elements';


export default function InfoScreenA({ navigation }) {
  
  //Modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //Modal styling
  const containerStyle = { backgroundColor: 'white', padding: 20 };


  const updatesCollectionRef = collection(db2, "updates") // Gets update database from firebase


  // Sets variables for create function
  const [newUpdate, setNewUpdate] = useState("");
  const [newDate, setNewDate] = useState("");

  const [updates, setUpdates] = useState([]);

  // Create function
  const createUser = async () => {
    await addDoc(updatesCollectionRef, { update: newUpdate, date: newDate });  // Adds data to firebase
    alert("update successfully added! ");
    navigation.replace('AdminInfo'); // Refreshes with updated information
  };

  useEffect(() => {
    const getUpdates = async () => {
      const data = await getDocs(updatesCollectionRef); // Displays data from updates database in firebase
      setUpdates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUpdates();
  }, []);

  return (
<Provider>
    <SafeAreaView>

      <View style={styles.InfocontainerA}>

        <ScrollView>
          <View style={styles.InfoheadercontainerA}>
            <IconButton
              icon="home"
              size={30}
              onPress={() => navigation.navigate('AdminHome')}
            />
            <Text style={styles.Infoheader}>Our Tuckshop</Text>
          </View>



          <View> 
            <Text style={styles.updatesheader}>NEWSFEED</Text>
            <View style={styles.addupdatecontainer}>

                <TouchableOpacity onPress={showModal}>
                  <Text style={styles.addupdate} >Add New Update</Text>
                </TouchableOpacity>

                <Portal>
                  <Modal visible={visible} onDismiss={hideModal} ontentContainerStyle={containerStyle}>
                    <View style={styles.addupdatec}>
                      <Text style={styles.menucreatetext}>Add an Update...</Text>
                      <Input placeholder="Type message here..."
                        onChangeText={(text) => {
                          setNewUpdate(text);
                        }} />

                      <Input
                        placeholder="Date (dd/mm/yy)..."
                        onChangeText={(date) => {
                          setNewDate(date);
                        }} />


                      <TouchableOpacity onPress={createUser} style={styles.createupdatebutton}><Text style={styles.updatebuttontext}>Add Update</Text></TouchableOpacity>
                    </View>

                  </Modal>
                </Portal>

              </View>



            </View>
       
            <View style={styles.updatescontainer}>


              {updates.map((updates) => {
                return (

                  <View style={styles.update}>

                    <Text>{updates.update}</Text>
                    <Text>Date updated: {updates.date}</Text>

                  </View>

                );
              })}

              
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>
   </Provider>
  );
}
