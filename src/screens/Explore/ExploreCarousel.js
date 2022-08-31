import React from 'react'
import {View, Text, SafeAreaView, StyleSheet}  from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ExploreCarousel = () => {
    const isCarousel = React.useRef(null)
        const carouselItems =[
        {
            text: "Phones",
            colori: "#FF097D",
        },
        {
            text:"Watches",
            colori:"#00C9E3"
        },
        {
            text: "Laptops",            
            colori:"#9900EF"
        },
        {
            text:"Shoes",
            colori:"#9900EF"
        }
    ];

    function _renderItem({item, index}){
        return(
            <View style={[styles.container, {backgroundColor:item.colori,  borderColor: item.colori,}]}>
                <Text style={styles.text} >{item.text}</Text>
            </View>
        );
        
    };

    
    return(
        <SafeAreaView>
            <View>
                <Carousel
                    layout={"default"}
                    ref={isCarousel}
                    data={carouselItems}
                    renderItem={_renderItem}
                    itemWidth={160}
                    sliderWidth={550}
                 />

            </View>

        </SafeAreaView>

    )
    
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        backgroundColor:"green",       
        borderRadius: 10,
        height: 45,
        width: 150,
        marginLeft:-175,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'

    },
    text:{
        color:'white',
        fontSize: 20,
        fontFamily:'Segoe UI Bold',
        
    }

})

export default ExploreCarousel;
