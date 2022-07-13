import React from "react";
import {View, Text, Dimensions} from 'react-native'
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";

const {width} = Dimensions.get("window");

const CustomSlider = ({data}) =>{
    const settings ={
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: data,
        renderItem: CarouselItem,
        hasParallaxImages: true,
        onSnapToItem: (index) => setSlideIndex(index),
    };

    return(
        <View>
            <Carousel {...settings}/>

        </View>
    )
}

export default CustomSlider;