import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { db1 } from '../../firebase-config';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styles from '../../styles';
import { Card, Input } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Portal, Provider, IconButton } from 'react-native-paper';


export default function MenuScreenA({ navigation }) {

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const [newFood, setNewFood] = useState("");
    const [newCost, setNewCost] = useState(0);
    const [newCategory, setNewCategory] = useState("");

    const [currentTab, setCurrentTab] = useState('all');
    const [menu, setMenu] = useState({
        hotFood: [],
        drinks: [],
        sweets: [],
        all: [],
    });
    const menuCollectionRef = collection(db1, "menu");

    const createUser = async () => {
        await addDoc(menuCollectionRef, { food: newFood, cost: Number(newCost), category: newCategory });
        alert("item successfully added!");
        navigation.replace('AdminMenu');
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db1, "menu", id);
        await deleteDoc(userDoc);
        alert("item successfully removed. ");
        navigation.replace('AdminMenu');
    };


    const increaseCost = async (id, cost) => {
        const userDoc = doc(db1, "menu", id);
        const newFields = { cost: cost + 0.1 };
        await updateDoc(userDoc, newFields);
        alert("cost successfully increased! ");
        navigation.replace('AdminMenu');
    };

    const decreaseCost = async (id, cost) => {
        const userDoc = doc(db1, "menu", id);
        const newFields = { cost: cost - 0.1 };
        await updateDoc(userDoc, newFields);
        alert("cost successfully decreased!");
        navigation.replace('AdminMenu');
    };

    useEffect(() => {
        const getMenu = async () => {
            const data = await getDocs(menuCollectionRef);
            const menuItems = {
                hotFood: [],
                drinks: [],
                sweets: [],
                all: [],
            };

            data.docs.forEach((doc) => {
                if (doc.category === 'hotFood') {
                    menuItems.hotFood.push({
                        ...doc.data(),
                        id: doc.id
                    });

                }

                if (doc.category === 'drinks') {
                    menuItems.drinks.push({
                        ...doc.data(),
                        id: doc.id
                    });
                }
                if (doc.category === 'sweets') {
                    menuItems.sweets.push({
                        ...doc.data(),
                        id: doc.id
                    });
                }

                menuItems.all.push({
                    ...doc.data(),
                    id: doc.id
                });

            })
            setMenu(menuItems);
        };

        getMenu();
    }, []);

    if (!menu.all) return null;

    let currentItems = [];

    if (currentTab === 'all') {
        currentItems = menu.all;
        console.log(currentTab);
    }

    if (currentTab === 'hotFood') {
        currentItems = menu.hotFood;
        console.log(currentTab);
    }

    if (currentTab === 'drinks') {
        currentItems = menu.drinks;
        console.log(currentTab);
    }

    if (currentTab === 'sweets') {
        currentItems = menu.sweets;
        console.log(currentTab);
    }



    return (
        <> 
            <Provider>
                <ScrollView>
                    <SafeAreaView><IconButton
            icon="home"
            size={30}
            onPress={() => navigation.navigate('AdminHome')} />
                        <View style={styles.menutitlecontainer}>
                            <Text style={styles.menutitle}>Menu</Text>
                        </View>

                        {/* <View style={styles.tabcontainer}>
          <TouchableOpacity
          title="all"
            style={styles.tab} 
            onPress={() => setCurrentTab('all')}
            >
                <Text>All</Text>
            
        </TouchableOpacity>
        <TouchableOpacity 
            title="hotFood"
            style={styles.tab} 
            onPress={() => setCurrentTab('hotFood')}
            >
                <Text>Hot Food</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            title="drinks"
            style={styles.tab} 
            onPress={() => setCurrentTab('drinks')}
            >
                <Text>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            title="sweets"
            style={styles.tab} 
            onPress={() => setCurrentTab('sweets')}
            >
                <Text>Sweets</Text>
        </TouchableOpacity>

      </View> */}






                        <View style={styles.menucontainer}>
                            <TouchableOpacity style={styles.createmodalbtn} onPress={showModal}>
                                <Text style={styles.additemtext}>Add Food</Text>
                            </TouchableOpacity>

                            <Portal>
                                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                    <View style={styles.create}>
                                        <Text style={styles.menucreatetext}>Create Menu Item</Text>
                                        <Input placeholder="Food..."
                                            onChange={(event) => {
                                                setNewFood(event.target.value);
                                            }} />

                                        <Input type="number"
                                            placeholder="Price..."
                                            onChange={(event) => {
                                                setNewCost(event.target.value);
                                            }} />

                                        <Input placeholder="Category..."
                                            onChange={(event) => {
                                                setNewCategory(event.target.value);
                                            }} />

                                        <TouchableOpacity onPress={createUser} style={styles.createbutton}><Text style={styles.buttontext}>Add Item</Text></TouchableOpacity>
                                    </View>

                                </Modal>
                            </Portal>



                            {currentItems.map((menu, i) => {

                                return (
                                    <View key={menu.id}>

                                        <Card>

                                            <Text>Food: {menu.food}</Text>
                                            <Text>Cost: $ {menu.cost}</Text>

                                            <View style={styles.buttonStyleContainer}>
                                                <TouchableOpacity style={styles.editbutton} onPress={() => { increaseCost(menu.id, menu.cost) }}>
                                                    <Text style={styles.buttontext}>  + cost</Text></TouchableOpacity>
                                                <TouchableOpacity style={styles.editbutton} onPress={() => { decreaseCost(menu.id, menu.cost) }} ><Text style={styles.buttontext}>- cost</Text></TouchableOpacity>


                                                <TouchableOpacity onPress={() => { deleteUser(menu.id) }} style={styles.delbutton}><Text style={styles.buttontext}>Delete</Text></TouchableOpacity>
                                            </View>

                                        </Card>



                                    </View>


                                );
                            })}

                        </View>


                    </SafeAreaView>
                </ScrollView>
            </Provider>
        </>
    );
}