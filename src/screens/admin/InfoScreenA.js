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

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  const [newUpdate, setNewUpdate] = useState("");
  const [newDate, setNewDate] = useState("");

  const [updates, setUpdates] = useState([]);
  const updatesCollectionRef = collection(db2, "updates")

  const createUser = async () => {
    await addDoc(updatesCollectionRef, { update: newUpdate, date: newDate });
    alert("update successfully added! ");
    navigation.replace('AdminInfo');
  };

  useEffect(() => {
    const getUpdates = async () => {
      const data = await getDocs(updatesCollectionRef);
      setUpdates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUpdates();
  }, []);

  return (

    <SafeAreaView>
      <View style={styles.Infocontainer}>


        <ScrollView>
          <View style={styles.Infoheadercontainer}>
            <IconButton
              icon="home"
              size={30}
              onPress={() => navigation.navigate('AdminHome')}
            />
            <Text style={styles.Infoheader}>Our Tuckshop</Text>
          </View>




          <Image style={styles.image5}
            source={{
              uri: 'https://www.stmargarets.qld.edu.au/Images/UserUploadedImages/520/tuckshop%20menu.jpg',
            }}
          />


          <View style={styles.GeneralInfocontainer}>
            <Text style={styles.infoheader2}>General Info</Text>
            <Text style={styles.GeneralInfoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ligula hendrerit, lobortis turpis quis, tempus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ac neque nec urna consectetur rhoncus. Donec finibus, dui tempus blandit laoreet, lectus elit dignissim sapien, sodales finibus erat lectus vitae felis. Aliquam sagittis placerat cursus. Etiam viverra mauris at mattis euismod. Proin convallis gravida lectus, sed placerat massa dictum id. Nunc vitae ipsum nec metus tristique tincidunt. Integer vestibulum nunc erat, sit amet gravida arcu accumsan aliquam.</Text>
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

          <View> <Provider>
            <Text style={styles.updatesheader}>UPDATES</Text>
            <View style={styles.updatescontainer}>


              {updates.map((updates) => {
                return (

                  <View style={styles.update}>

                    <Text>{updates.update}</Text>
                    <Text>Date updated: {updates.date}</Text>

                  </View>

                );
              })}

              <View style={styles.addupdatecontainer}>

                <TouchableOpacity onPress={showModal}>
                  <Text style={styles.addupdate} >Add Update</Text>
                </TouchableOpacity>

                <Portal>
                  <Modal visible={visible} onDismiss={hideModal} style={styles.ContainerStyle}>
                    <View style={styles.addupdatec}>
                      <Text style={styles.menucreatetext}>Add an Update...</Text>
                      <Input placeholder="Type message here..."
                        onChange={(event) => {
                          setNewUpdate(event.target.value);
                        }} />

                      <Input
                        placeholder="Date (dd/mm/yy)..."
                        onChange={(event) => {
                          setNewDate(event.target.value);
                        }} />


                      <TouchableOpacity onPress={createUser} style={styles.createupdatebutton}><Text style={styles.updatebuttontext}>Add Update</Text></TouchableOpacity>
                    </View>

                  </Modal>
                </Portal>

              </View>



            </View>
          </Provider>
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>

  );
}
