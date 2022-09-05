import React from "react";
import {View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import Styles from "./Style";
import Menu from "react-native-vector-icons/MaterialIcons"
import Searchbar from "../../components/Searchbar/Searchbar";

import newarrivals from "../../data/NewArrivals";
import images from "../../data/Images";
import recentlyviewed from "../../data/RecentlyViewed";
import CarouselCards from "../../components/ImageCarousel/CarouselCard";

import DashboardCarousel from "./DashboardCarousel";

const Dashboard = () => {
     

    return(
        <ScrollView>
        <View >
        {/* header section */}
            <View style={{flexDirection:'row', marginTop: 40, justifyContent:'space-between'}}>
                <Image 
                   source={require('../../../assets/images/woman.jpg')}  
                   style={{height: 55, width: 55, resizeMode:'contain', borderRadius: 40, marginLeft: 30,}}
                />
                <View>
                  <Text style={{fontFamily: "Segoe UI", fontSize: 30, color:'black'}}>Hey 
                  <Text style={{fontFamily: "Segoe UI Bold",}}> Debby</Text>
                  </Text>
                  <Text style={{fontFamily: "Segoe UI", fontSize: 20, color:"#E86B62"}}>Welcome back!</Text>
                </View>              
                <Menu name="menu" color={"#E86B62"} size={40} style={{marginRight: 30,}}/>

            </View>

            {/* Search bar */}
            <View style={{marginTop: 10,}}>
            <Searchbar />

            {/* New Arrivals section */}
            <View  style={{marginBottom: 20,}}>
                <View style={Styles.newArrival}>
                   <Text style={Styles.newText}>New Arrivals</Text>
                </View>  

                <CarouselCards data={newarrivals} />

                <View style={Styles.newArrival}>
                   <Text style={Styles.newText}>Recently Viewed</Text>
                </View>

                <CarouselCards data={recentlyviewed}  />

                <View style={{height: 30}}>
                    
                </View>
                
                                         
            </View>

            {/* Recently Viewed */}
            {/* <View style={Styles.recentlyViewed}>
                <View>
                   <Text style={Styles.newText}>Recently Viewed</Text>
                </View>        
            </View> */}

            
            
            

          
        </View>
        </View>
        </ScrollView>
    )
}

export default Dashboard;