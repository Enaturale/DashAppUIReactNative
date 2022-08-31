import React from "react"
import { View, Text, SafeAreaView, FlatList, ScrollView , Image} from 'react-native';

import styles from "./Styles";
 
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
        avatar: '',
        title: 'John',
        location: 'Nigeria',
        productname: 'Infinix Smart 6',
        price: '50',
        productimage: '',
        color: '#FF097D',
    },
    {
        id: '3',
        avatar: '',
        title: 'Elizabeth',
        location: 'Kenya',
        productname: 'Loof Bag',
        price: '100',
        productimage: '',
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

const ListItem = ({ index, item }) => {
    return (
        <View style={[styles.container, {backgroundColor: item.color}]}>
            <View>
                <Image source={{uri: item.avatar}} style={{height: 50, width: 50}} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
            </View>
        
        <Image  source={{uri: item.productimage}} style={{height: 100, width: 100}}/>
            <Text style={styles.productName}>{item.productname}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    );
}


const List = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            
            <FlatList
                data={listdata}
                renderItem={({ item }) => <ListItem item={item} />}
            />     

        </SafeAreaView>
    )
}

export default List;

