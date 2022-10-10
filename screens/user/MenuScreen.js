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
    
    const menuCollectionRef = collection(db1, "menu"); // Gets menu database from firebase

    const [currentTab, setCurrentTab] = useState('all'); // Initially displays all menu items
    const [menu, setMenu] = useState({
        main: [],
        drinks: [],
        sweets: [],
        all: [],
    }); // states menu item categories

    useEffect(() => {
        const getMenu = async () => {
            const data = await getDocs(menuCollectionRef); // Using menu items from menu collection in firebase
            const menuItems = {
                main: [],
                drinks: [],
                sweets: [],
                all: [],
            }; // menu item categories 


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
                }); // when category 'all' is called, then push display all menu items

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