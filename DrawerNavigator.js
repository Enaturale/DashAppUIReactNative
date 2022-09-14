import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Message from './src/screens/Message/Message';
import LikedItems from './src/screens/LikedItems/LikedItems';

const DrawerNavigartor =() => {
    return(
        <Drawer.Navigator
           initialRouteName='first'
        >
            <Drawer.Screen name='first' component={Message}/>
            <Drawer.Screen name="second" component={LikedItems}/>
        </Drawer.Navigator>

    )
}

export default DrawerNavigartor;