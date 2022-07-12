import React from "react";
import {View, Text, Image, Pressable} from 'react-native';
import Styles from "./Style";
import Menu from "react-native-vector-icons/MaterialIcons"

const Dashboard = () => {
    return(
        <View>
        {/* header section */}
            <View style={{flexDirection:'row', marginTop: 70, justifyContent:'space-between'}}>
                <Image 
                   source={require('../../../assets/images/woman.jpg')}  
                   style={{height: 55, width: 55, resizeMode:'contain', borderRadius: 40, marginLeft: 30,}}
                />
                <View>
                  <Text style={{fontFamily: "Segoe UI", fontSize: 30, color:'black'}}>Hey <Text style={{fontFamily: "Segoe UI Bold",}}>Debby</Text></Text>
                  <Text style={{fontFamily: "Segoe UI", fontSize: 20, color:"#E86B62"}}>Welcome back!</Text>
                </View>              
                <Menu name="menu" color={"#E86B62"} size={40} style={{marginRight: 30,}}/>

            </View>

            {/* Search bar */}

          
        </View>
    )
}

export default Dashboard;