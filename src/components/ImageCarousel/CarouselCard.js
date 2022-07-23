import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'

import newarrivals from '../../data/NewArrivals'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './Carousel'

const CarouselCards = ({data}) => {
  const isCarousel = React.useRef(null)
  const [slideIndex, setSlideIndex] = React.useState(0);

  return (
    <View>
      <Carousel
        layout="default"
        // 
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // inactiveSlideShift={0}
        useScrollView={true}
        hasParallaxImages = {true}
        onSnapToItem = {(index) => setSlideIndex(index)}
       
      />
    </View>
  )
}


export default CarouselCards