import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { db1 } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../../styles';
import { Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from 'react-native-paper';


export default function MenuScreen({ navigation }) {

    // Gets menu database from firebase
    const menuCollectionRef = collection(db1, "menu"); 
    
    // First shows all menu items
    const [currentTab, setCurrentTab] = useState('all'); 
    // Menu item categories
    const [menu, setMenu] = useState({
        main: [],
        drinks: [],
        sweets: [],
        all: [],
    }); 

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
            
            //if category name is called, then data under that category will be pushed/shown
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
<ScrollView>
    <SafeAreaView>
            
            <IconButton
                icon="home"
                size={30}
                onPress={() => navigation.navigate('Home')}
            />

            
                    <View style={styles.menutitlecontainer}>
                        <Text style={styles.menutitle}>Menu</Text>
                    </View>

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


                    <View style={styles.menucontainer}>
                        
                        {/* Mapping out menu items */}
                        {currentItems.map((menu, i) => {

                            return (
                                <View key={menu.id}>
                                    <Card>
                                        <Text>Food: {menu.food}</Text>
                                        <Text>Cost: $ {menu.cost}</Text>
                                    </Card>
                                </View>
                            );
                        })}
                    </View>

    </SafeAreaView>
</ScrollView>
        </>
    
    );
}