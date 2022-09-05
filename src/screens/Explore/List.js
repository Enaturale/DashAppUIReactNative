import React from "react"
import { View, Text, SafeAreaView, FlatList, ScrollView, Image, VirtualizedList } from 'react-native';

import Carousel from 'react-native-snap-carousel';


import styles from "./Styles";
import images from './images'



const listdata = [
    {
        id: '1',
        avatar: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
        title: 'Kate',
        location: 'England',
        productname: 'Balenciaga',
        price: '900',
        productimage: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
        color: '#00C9E3',
    },
    {
        id: '2',
        avatar: 'https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821__340.jpg',
        title: 'John',
        location: 'Nigeria',
        productname: 'Infinix Smart 6',
        price: '50',
        productimage: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
        color: '#B71C1C',
    },
    {
        id: '3',
        avatar: 'https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg',
        title: 'Elizabeth',
        location: 'Kenya',
        productname: 'Loof Bag',
        price: '100',
        productimage: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
        color: '#008B02',
    },
    // {
    //     id: '4',
    //     avatar: '',
    //     title: 'Elizabeth',
    //     location: 'Kenya',
    //     productname: 'Loof Bag',
    //     price: '100',
    //     productimage: '',
    //     color: '#008B02',
    // }

];

const ListItem = ({ index, item}) => {
    return (
        <View style={[styles.container, { backgroundColor: item.color }]}>
            <View style={styles.topSection}>
                <Image source={{ uri: item.avatar }} style={{ height: 50, width: 50, borderRadius: 25, }} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>


            <View style={styles.imageSection}>
                <Image source={{ uri: item.productimage }} style={styles.image} />
            </View>

            <View style={styles.bottomSection}>
                <Text style={styles.productName}>{item.productname}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>

        </View>
    );
}


const List = () => {
    const isCarousel = React.useRef(null);
    const [slideIndex, setSlideIndex] = React.useState(0);
    return (
        <SafeAreaView style={styles.mainContainer}>

            <FlatList
                data={listdata}
                showsVerticalScrollIndicator={false} 
                renderItem={({ item }) => <ListItem item={item}  />}
            />
            {/* <Carousel 
            layout={"default"}
            ref={isCarousel}
            data={listdata}
            renderItem={ListItem}
            // itemWidth={160}
            // sliderWidth={550}
            vertical={true}
            sliderHeight={500}
            itemHeight={370}
            onSnapToItem = {(index) => setSlideIndex(index)}
           
            /> */}

        </SafeAreaView>
    )
}

export default List;

