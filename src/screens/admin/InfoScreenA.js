import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Portal, Provider, IconButton } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db2 } from '../../firebase-config';
import styles from '../../styles';


export default function InfoScreenA({ navigation }) {
  
  // Modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  

  // Styles the modal
  const containerStyle = { backgroundColor: 'white', padding: 20 };


  // Get update database from firebase
  const updatesCollectionRef = collection(db2, "updates") 


  // Set variables for create function
  const [newUpdate, setNewUpdate] = useState("");
  const [newDate, setNewDate] = useState("");

  const [updates, setUpdates] = useState([]);



  // Add an update
  const createUser = async () => {


    // First, add data to firebase
    await addDoc(updatesCollectionRef, { update: newUpdate, date: newDate }); 

    alert("update successfully added! ");

    // Refresh page with updated information
    navigation.replace('AdminInfo'); 


  };



  // Delete update
  const deleteUser = async (id) => {


    // the data that will be changed
    const userDoc = doc(db2, "updates", id); 

    // delete data from firebase
    await deleteDoc(userDoc); 

    alert("item successfully removed.");

    //Reloads with updated information
    navigation.replace('AdminInfo'); 


};




// Gets data from updates database in firebase
  useEffect(() => {
    const getUpdates = async () => {
      const data = await getDocs(updatesCollectionRef); 
      setUpdates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUpdates();
  }, []);


  
  return (
<Provider>
    <SafeAreaView>
  <ScrollView>
      <View style={styles.InfocontainerA}>

      
          <View style={styles.InfoheadercontainerA}>
            <IconButton
              icon="home"
              size={30}
              onPress={() => navigation.navigate('AdminHome')}
            />
            <Text style={styles.Infoheader}>Our Tuckshop</Text>
          </View>



          <View style={styles.newsfeedheading}> 
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

                    <Text style={styles.updatetext}>{updates.update}</Text>
                    <Text>Date updated: {updates.date}</Text>

                  
                  <IconButton
              icon="delete"
              size={25}
              style={styles.updatedelbutton}
              onPress={() => { deleteUser(updates.id) }}
            />
                   
                 

                  </View>
                );
              })}

              
          </View>


        
      </View>
      </ScrollView>
    </SafeAreaView>
   </Provider>
  );
}