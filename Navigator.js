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

import Icon from 'react-native-vector-icons/MaterialIcons'



function DashboardScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="DashboardPage" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="ExplorePage" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="MessagePage" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="LikedPage" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="CameraPag" component={Camera} options={{headerShown: false}} />
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
            <Stack.Screen name="Camscreen" component={Camera} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

function CameraScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="CameraPg" component={Camera} options={{headerShown: false}} />
            <Stack.Screen name="Explore" component={Explore} options={{headerShown: false}} />
            <Stack.Screen name="Message" component={Message} options={{headerShown: false}} />
            <Stack.Screen name="Liked" component={LikedItems} options={{headerShown: false}} />
            <Stack.Screen name="Dash" component={Dashboard} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default function BottomTab({tab, focused}){
    return(
        <Tab.Navigator         
                screenOptions={{   
                    tabBarActiveTintColor:'#06275A'     ,
                    tabBarInactiveTintColor:'white',      
                    tabBarStyle:{
                        backgroundColor: '#E86B62',
                        height: 80,
                        borderTopEndRadius: 40,
                        borderTopStartRadius: 40,        
                    },
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontFamily:'Segoe UI Bold',
                        //color: focused ? '#06275A' : 'white',
                        marginBottom: 15,
                    },   
                    // tabBarOptions:{
                    //     activeTintColor:'#06275A',
                    //     inactiveTintColor:'white'
                    // }
                                  
                }}
        >

            <Tab.Screen 
                name="Home" 
                component={DashboardScreen} 
                options={{                    
                    headerShown: false,
                    tabBarIcon: ({focused}) => ( 
                        <Icon name="home" size={23} color={focused ? '#06275A' : 'white'} style={{ marginTop: 15,}}/>
                    ),  
                  
                    
                }} 
            
            />

            <Tab.Screen 
                name="Explore" 
                component={ExploreScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Icon name="explore" size={23} color={focused ? '#06275A' : 'white'} style={{ marginTop: 15,}}/>
                    ),
                   
                }} 
            />

            <Tab.Screen 
                name="Camera" 
                component={CameraScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Icon name="camera-alt" size={45} color={focused ? '#06275A' : 'white'}  />
                    )
                }} 
            />

            <Tab.Screen
                name="Favorite" 
                component={LikedItemsScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Icon name="favorite" size={23} color={focused ? '#06275A' : 'white'} style={{ marginTop: 15,}} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Message" 
                component={MessageScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Icon name="message" size={23} color={focused ? '#06275A' : 'white'} style={{ marginTop: 15,}} />
                    ),
                    
                }} 
            />
        </Tab.Navigator>
    )
}
