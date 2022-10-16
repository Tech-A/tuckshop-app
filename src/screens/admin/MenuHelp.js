import React from "react";
import { View, Text,  TouchableOpacity} from 'react-native';
import styles from '../../styles';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuHelp({ navigation }) {
return (
  
    <SafeAreaView>
    <ScrollView>
    <View style={styles.helpcontainer}>


    <TouchableOpacity title="Go back" onPress={() => navigation.goBack()} style={styles.backbutton}><Text style={styles.backheader}>Back</Text></TouchableOpacity>
 
    <View style={styles.helpheadercontainer}>
            <Text style={styles.helpheader}>Help</Text>
          </View>


          <View style={styles.HelpTextcontainer}>
            <Text style={styles.helpheader2Green}>Add a Menu Item</Text>
            <Text style={styles.HelpText} >You can create a new menu item by pressing the green Add Item button in the center of the screen. Fill out the form when it appears.</Text>
            <Text style={styles.HelpText2}>Food: Enter the name of the new food. Please CAPITALISE the first letter of each word.</Text>
            <Text style={styles.HelpText2}>Price: Enter the price as a NUMBER. No need to add a $, just enter the number (ie. 1).</Text>
            <Text style={styles.HelpText2}>Category: Enter the category name you want the food to go under. Categories are listed at the bottom of the form (main, drinks, sweets). Make sure you type everything in LOWERCASE.</Text>

            <Text style={styles.helpheader2Red}>Delete a Menu Item</Text>
            <Text style={styles.HelpText}>You can simply delete a menu item by pressing the red Delete button from the item you want to delete. </Text>

            <Text style={styles.helpheader2Blue}>Increase/Decrease Cost</Text>
            <Text style={styles.HelpText}>You can increase or decrease the cost of Menu items by $1.00. Press the + cost button to increase, and the - cost button to decrease. If you have a specific cost, please delete and create the menu item again with the specific cost you want. </Text>
          </View>


    </View>
</ScrollView>
</SafeAreaView>
);
}