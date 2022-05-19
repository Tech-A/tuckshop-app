import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { db1 } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import globalStyles from '../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: '25%',

    }
})

export default function MenuScreen({ navigation }) {
    const [currentTab, setCurrentTab] = useState('all');
    const [menu, setMenu] = useState({
        hotFood: [],
        drinks: [],
        all: [],
    });
    const menuCollectionRef = collection(db1, "menu");
  
    useEffect(() => {
      const getMenu = async () => {
        const data = await getDocs(menuCollectionRef);
        const menuItems = {
            hotFood: [],
            drinks: [],
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

            menuItems.all.push({
                ...doc.data(), 
                id: doc.id 
            });
            
        })
        setMenu(menuItems);
      };
  
      getMenu();
    }, []);

    if (!menu.all ) return null;

    let currentItems = [];

    if (currentTab === 'all') {
        currentItems = menu.all;
    }

    if (currentTab === 'hotFood') {
        currentItems = menu.hotFood;
    }

  return (
      <>
      <View>
          <Button 
            title="All"
            style={globalStyles.button} 
            onPress={() => setCurrentTab('all')}
            >
            All
        </Button>
        <Button 
            title="Hot food"
            style={globalStyles.button}
            onPress={() => setCurrentTab('hotFood')}
            >
                Hot food
        </Button>
      </View>
        <View style={styles.container}> 
        <Text>{currentTab}</Text>
        {currentItems.map((menu, i) => {
            
            return (
        
            <View key={menu.id}>
            <Text>Food: {menu.food}</Text>
            <Text>Cost: {menu.cost}</Text>
            </View>
            );
        })} 
        </View>
      </>
      );
  }

