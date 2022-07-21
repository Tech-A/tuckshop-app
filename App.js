import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screens/MenuScreen';
import LoginScreen from './src/screens/LoginScreen';
import InfoScreen from './src/screens/InfoScreen';
import HomeScreen from './src/screens/HomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* <Stack.Screen name="Preorder" component={ChoicesScreen} /> */}
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Guest" component={GuestScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







