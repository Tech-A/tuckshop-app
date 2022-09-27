import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screens/user/MenuScreen';
import LoginScreen from './src/screens/user/LoginScreen';
import InfoScreen from './src/screens/user/InfoScreen';
import HomeScreen from './src/screens/user/HomeScreen';
import HomeScreenA from './src/screens/admin/HomeScreenA';
import MenuScreenA from './src/screens/admin/MenuScreenA';
import InfoScreenA from './src/screens/admin/InfoScreenA';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminHome" component={HomeScreenA} />
        <Stack.Screen name="AdminMenu" component={MenuScreenA} />
        <Stack.Screen name="AdminInfo" component={InfoScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







