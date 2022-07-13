import React from "react";
import {View, SafeAreaView,Pressable} from 'react-native'
import { ParallaxImage } from "react-native-snap-carousel";

const CarouselItem = ({item}, parallaxProps) => {
    return(
        <View style={{height: 270, width: 200, marginVertical: 10,}}>
            <SafeAreaView>
                {/* <ParallaxImage 
                   source={{}}

                /> */}
                <View style={{flexDirection:'column'}}>
                    <Text>{item.title}</Text>
                    <Text>{item.desc}</Text>
                    <Text>{item.price}</Text>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default CarouselItem;