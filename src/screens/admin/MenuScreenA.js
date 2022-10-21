import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Portal, Provider, IconButton } from 'react-native-paper';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db1 } from '../../firebase-config';
import styles from '../../styles';




export default function MenuScreenA({ navigation }) {

    // Modal
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };


    // New data for Create function
    const [newFood, setNewFood] = useState("");
    const [newCost, setNewCost] = useState(0);
    const [newCategory, setNewCategory] = useState("");


    // Create function adds item to the menu database
    const createUser = async () => {


        // adds data to firebase
        await addDoc(menuCollectionRef, { food: newFood, cost: Number(newCost), category: newCategory }); 
        alert("item successfully added!");
        
        // Now reload with updated information
        navigation.replace('AdminMenu'); 


    };



    // Delete item from menu database
    const deleteUser = async (id) => {

        // The data that will be changed
        const userDoc = doc(db1, "menu", id); 


        // Delete data from firebase
        await deleteDoc(userDoc); 
        alert("item successfully removed.");
        
        // Now reload with updated information
        navigation.replace('AdminMenu'); 


    };


    // Increase price of menu item
    const increaseCost = async (id, cost) => {


        const userDoc = doc(db1, "menu", id);
        // Increase cost of price of data from menu database by 1

        const newFields = { cost: cost + 1 }; 
        // Update data in firebase


        await updateDoc(userDoc, newFields); 
        alert("cost successfully increased!");
        
        // Now reload with updated information
        navigation.replace('AdminMenu'); 


    };


    // Decrease price of menu item
    const decreaseCost = async (id, cost) => {


        const userDoc = doc(db1, "menu", id);

        // Decrease cost of price of data from menu database by 1
        const newFields = { cost: cost - 1 }; 


        // Updates data in firebase
        await updateDoc(userDoc, newFields); 
        alert("cost successfully decreased!");
        

        // Now reload with updated information
        navigation.replace('AdminMenu'); 
    };




    // Categories for menu tab filtering
    const [currentTab, setCurrentTab] = useState('all');
    const [menu, setMenu] = useState([{
        main: [],
        drinks: [],
        sweets: [],
        all: [],
    }]);

    // Gets menu database from firebase
    const menuCollectionRef = collection(db1, "menu"); 



    useEffect(() => {
        const getMenu = async () => {

            // Using menu items from menu collection in firebase
            const data = await getDocs(menuCollectionRef);

            // Categories 
            const menuItems = {
                main: [],
                drinks: [],
                sweets: [],
                all: [],
            }; 


            //if category name is called, then data under that category will be shown
            data.docs.forEach((doc) => {


                // Main menu items
                if (doc.data().category === 'main') {
                    menuItems.main.push({
                        ...doc.data(),
                        id: doc.id
                    }); 

                }

                // Drinks
                if (doc.data().category === 'drinks') {
                    menuItems.drinks.push({
                        ...doc.data(),
                        id: doc.id
                    }); 
                }

                // Sweets
                if (doc.data().category === 'sweets') {
                    menuItems.sweets.push({
                        ...doc.data(),
                        id: doc.id
                    }); 
                }

                // All
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
    
    
    // Show only current items on menu
    let currentItems = []; 
    

    // Show the current items when tab is pressed. 
    if (currentTab === 'all') {
        currentItems = menu.all;
    } 
    if (currentTab === 'main') {
        currentItems = menu.main;
    } 
    if (currentTab === 'drinks') {
        currentItems = menu.drinks;
    } 
    if (currentTab === 'sweets') {
        currentItems = menu.sweets;
    } 








    return (
        <>
            <Provider>
                <ScrollView>
                    <SafeAreaView>

                       
                         <IconButton
                            icon="home"
                            size={30}
                            style={styles.icon2}
                            onPress={() => navigation.navigate('AdminHome')} />

                        <View style={styles.menuhelpcontainerA}>
                            <TouchableOpacity  onPress={() => navigation.navigate('MenuHelp')}>
                                <Text style={styles.menuhelp}>Need Help?</Text>
                            </TouchableOpacity>
                        </View>
    

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

                                        <Input placeholder="Type in a category... (e.g main)"
                                            onChangeText={(category) => {
                                                setNewCategory(category);
                                            }} />
                                            
                                        <Text style={styles.categorytext}>CATEGORIES: (lowercase)</Text>
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
                                    onPress={() => setCurrentTab('all') }
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
                                                    <Text style={styles.buttontext}>+ cost</Text>
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