import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


// import Message from './src/screens/Message/Message';
// import LikedItems from './src/screens/LikedItems/LikedItems';
import Order from './src/screens/Order/Order';
import Listings from './src/screens/Listings/Listings';

function OrderStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OrderPage" component={Order} options={{ headerShown: false }} />
            <Stack.Screen name="ListPage" component={Listings} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function ListingStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListingPage" component={Listings} options={{ headerShown: false }} />
            <Stack.Screen name="OrdPage" component={Order} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}

const DrawerNavigartor = () => {
    return (
        <Drawer.Navigator
            initialRouteName='first'
        >
            <Drawer.Screen name='first' component={OrderStackScreen} />
            <Drawer.Screen name="second" component={ListingStackScreen} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigartor;