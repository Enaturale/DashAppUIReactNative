import React from "react";

import {View, Text, Pressable} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Signup/Signup";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import Message from "./src/screens/Message/Message";
import LikedItems from "./src/screens/LikedItems/LikedItems";
import Explore from "./src/screens/Explore/Explore";

import BottomTab from "./Navigator";

const Stack = createNativeStackNavigator();
 
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} options={{headerShown: false}}/>    
        <Stack.Screen  name="Login" component={Login} options={{headerShown: false}}/>  
        <Stack.Screen  name="Signup" component={Signup} options={{headerShown: false}}/>  
        <Stack.Screen  name="Dashboard" component={BottomTab} options={{headerShown: false}}/>  
        <Stack.Screen  name="Explore" component={BottomTab} options={{headerShown: false}}/>  
        <Stack.Screen  name="Messaged" component={BottomTab} options={{headerShown: false}}/>  
        <Stack.Screen  name="Fav" component={BottomTab} options={{headerShown: false}}/>   
      </Stack.Navigator>      
    </NavigationContainer>
  )
}

export default App;