import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { ParallaxImage } from 'react-native-snap-carousel'

export const SLIDER_WIDTH = Dimensions.get('window').width - 20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.36)


const CarouselCardItem = ({ item, index, }, parallaxProps) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]} key={index}>
        <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.desc}</Text>
      <Image
        source={{ uri: item.image }}
        // containerStyle={styles.imageContainer}
        style={styles.image}
      />
      <Text style={styles.body}>{item.price}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: 60,
    marginLeft: -90,
    
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
  },
  imageContainer:{
    flex: 3,
   borderRadius: 20,
    marginBottom: Platform.select({ios:0, android:1}),
    marginTop: 15,
    //marginLeft: 85,
},
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    fontFamily:'Segoe UI Bold',
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily:'Segoe UI',

  }
})

export default CarouselCardItem