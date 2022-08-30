import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Dashboard from "./src/screens/Dashboard/Dashboard";
import Explore from "./src/screens/Explore/Explore";
import Message from "./src/screens/Message/Message";
import LikedItems from "./src/screens/LikedItems/LikedItems";
import Camera from "./src/screens/Camera/Camera";



function DashboardScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="DashboardPage" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="ExplorePage" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="MessagePage" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="LikedPage" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="CameraPage" component={Camera} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

function ExploreScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ExploredPage" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="DashPage" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="MessPage" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="LikePage" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="CamPage" component={Camera} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


function MessageScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MessaPage" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="DashPage" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="CheckPage" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="FavPage" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="SnapPage" component={Camera} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
function LikedItemsScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="FavouritePage" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="ExplorePage" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="MessageerPage" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="DasboPage" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="Cam12Page" component={Camera} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

function CameraScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}} />
            <Stack.Screen name="Explore" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="Message" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="Liked" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="Dash" component={Dashboard} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default function bottomTab(props){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} options={{headerShown: false}} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{headerShown: false}} />
            <Tab.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
            <Tab.Screen name="Favorite" component={LikedItemsScreen} options={{headerShown: false}} />
            <Tab.Screen name="Message" component={MessageScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

