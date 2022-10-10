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

    //Modal
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };




    //New data for Create function
    const [newFood, setNewFood] = useState("");
    const [newCost, setNewCost] = useState(0);
    const [newCategory, setNewCategory] = useState("");

    // Adds to the menu database
    const createUser = async () => {
        await addDoc(menuCollectionRef, { food: newFood, cost: Number(newCost), category: newCategory }); // adds data to firebase
        alert("item successfully added!");
        navigation.replace('AdminMenu'); //Reloads with updated information
    };

    //Deletes from menu database
    const deleteUser = async (id) => {
        const userDoc = doc(db1, "menu", id); // States which data will be changed
        await deleteDoc(userDoc); // deletes data from firebase
        alert("item successfully removed.");
        navigation.replace('AdminMenu'); //Reloads with updated information
    };


    //Updates data in menu database

    const increaseCost = async (id, cost) => {
        const userDoc = doc(db1, "menu", id);
        const newFields = { cost: cost + 1 }; //Increases cost of price of data from menu database by 1
        await updateDoc(userDoc, newFields); // updates data in firebase
        alert("cost successfully increased!");
        navigation.replace('AdminMenu'); //Reloads with updated information
    };


    const decreaseCost = async (id, cost) => {
        const userDoc = doc(db1, "menu", id);
        const newFields = { cost: cost - 1 }; //Decreases cost of price of data from menu database by 1
        await updateDoc(userDoc, newFields); // updates data in firebase
        alert("cost successfully decreased!");
        navigation.replace('AdminMenu'); //Reloads with updated information
    };




    // States categories for menu tab filtering
    const [currentTab, setCurrentTab] = useState('all');
    const [menu, setMenu] = useState([{
        main: [],
        drinks: [],
        sweets: [],
        all: [],
    }]);
    const menuCollectionRef = collection(db1, "menu"); // Gets menu database from firebase


    useEffect(() => {
        const getMenu = async () => {
            const data = await getDocs(menuCollectionRef);
            const menuItems = {
                main: [],
                drinks: [],
                sweets: [],
                all: [],
            }; // declares categories

            data.docs.forEach((doc) => {
                if (doc.data().category === 'main') {
                    menuItems.main.push({
                        ...doc.data(),
                        id: doc.id
                    }); //if category 'mainFood' is called, then data under 'mainFood' will be pushed/shown

                }

                if (doc.data().category === 'drinks') {
                    menuItems.drinks.push({
                        ...doc.data(),
                        id: doc.id
                    }); //if category 'drinks' is called, then data under 'drinks' will be pushed/shown
                }
                if (doc.data().category === 'sweets') {
                    menuItems.sweets.push({
                        ...doc.data(),
                        id: doc.id
                    }); //if category 'sweets' is called, then data under 'sweets' will be pushed/shown
                }

                menuItems.all.push({
                    ...doc.data(),
                    id: doc.id
                }); // pushes/shows all items

            })
            setMenu(menuItems);
        };

        getMenu();
    }, []);




    if (!menu.all) return null;

    let currentItems = []; // menu shows only current items


    if (currentTab === 'all') {
        currentItems = menu.all;
    } // if current tab is 'all' or 'all' tab is pressed, menu shows all data.



    if (currentTab === 'main') {
        currentItems = menu.main;
    } // if current tab is 'main', menu only shows data under 'main'.



    if (currentTab === 'drinks') {
        currentItems = menu.drinks;
    } // if current tab is 'drinks', menu only shows data under 'drinks'.



    if (currentTab === 'sweets') {
        currentItems = menu.sweets;
    } // if current tab is 'sweets', menu only shows data under 'sweets'.






    return (
        <>
            <Provider>
                <ScrollView>
                    <SafeAreaView>

                        <IconButton
                            icon="home"
                            size={30}
                            onPress={() => navigation.navigate('AdminHome')} />

                        <View style={styles.menutitlecontainerA}>
                            <Text style={styles.menutitleA}>Menu</Text>
                        </View>

                        <View style={styles.menucontainerA}>

                            <TouchableOpacity style={styles.createmodalbtn} onPress={showModal}>
                                <Text style={styles.additemtext}>Add Food</Text>
                            </TouchableOpacity>

                            <Portal>
                                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                    <View style={styles.create}>
                                        <Text style={styles.menucreatetext}>Create Menu Item</Text>

                                        <Input placeholder="Food..."
                                            onChangeText={(text) => {
                                                setNewFood(text);
                                            }} />

                                        <Input type="number"
                                            placeholder="Price $..."
                                            onChangeText={(number) => {
                                                setNewCost(number);
                                            }} />

                                        <Input placeholder="Category... (e.g main)"
                                            onChangeText={(category) => {
                                                setNewCategory(category);
                                            }} />

                                        <Text style={styles.categorytext}>CATEGORIES: (must be lowercase)</Text>
                                        <Text style={styles.categorytextcategory}>- main</Text>
                                        <Text style={styles.categorytextcategory}>- sweets</Text>
                                        <Text style={styles.categorytextcategory}>- drinks</Text>

                                        <TouchableOpacity onPress={createUser} style={styles.createbutton}><Text style={styles.buttontext}>Add Item</Text></TouchableOpacity>
                                    </View>

                                </Modal>
                            </Portal>

                            <View style={styles.tabcontainer}>
                                <TouchableOpacity
                                    title="all"
                                    style={styles.tab}
                                    onPress={() => setCurrentTab('all')}
                                >
                                    <Text style={styles.tabtext}>All</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    title="main"
                                    style={styles.tab}
                                    onPress={() => setCurrentTab('main')}
                                >
                                    <Text style={styles.tabtext}>Main</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    title="drinks"
                                    style={styles.tab}
                                    onPress={() => setCurrentTab('drinks')}
                                >
                                    <Text style={styles.tabtext}>Drinks</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    title="sweets"
                                    style={styles.tab}
                                    onPress={() => setCurrentTab('sweets')}
                                >
                                    <Text style={styles.tabtext}>Sweets</Text>
                                </TouchableOpacity>

                            </View>



                            {currentItems.map((menu, i) => {

                                return (
                                    <View key={menu.id} >

                                        <Card style={styles.adminmenucard}>

                                            <Text>Food: {menu.food}</Text>
                                            <Text>Cost: $ {menu.cost}</Text>

                                            <View style={styles.buttonStyleContainer}>

                                                <TouchableOpacity style={styles.editbutton} onPress={() => { increaseCost(menu.id, menu.cost) }}>
                                                    <Text style={styles.buttontext}>  + cost</Text>
                                                    </TouchableOpacity>

                                                <TouchableOpacity style={styles.editbutton} onPress={() => { decreaseCost(menu.id, menu.cost) }} >
                                                    <Text style={styles.buttontext}>- cost</Text>
                                                    </TouchableOpacity>

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