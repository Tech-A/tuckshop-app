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
    
    const [currentTab, setCurrentTab] = useState('all');
    const [menu, setMenu] = useState({
        hotFood: [],
        drinks: [],
        sweets: [],
        all: [],
    });
    const menuCollectionRef = collection(db1, "menu");
  
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

    if (!menu.all ) return null;

    let currentItems = [];

    if (currentTab === 'all') {
        currentItems = menu.all;
    }

    if (currentTab === 'hotFood') {
        currentItems = menu.hotFood;
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
          <View style={styles.menutitlecontainer}> 
          <IconButton
    icon="home"
    size={30}
    onPress={() => navigation.navigate('Home')}
  />
              <Text style={styles.menutitle}>Menu</Text>
          </View>

      <View style={styles.tabcontainer}>
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

      </View>

        <View style={styles.menucontainer}> 
        <Text>{currentTab}</Text>
        {currentItems.map((menu, i) => {
            
            return (
            <View key={menu.id}>
            <Card>
            <Text>Food: {menu.food}</Text>
            <Text>Cost: {menu.cost}</Text>
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