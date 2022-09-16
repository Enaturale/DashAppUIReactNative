import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderPage from '../../components/Header/Header'
import Arrows from '../../components/Arrows/Arrows'
import styles from './Style'

const ListData = [
    {
        id: "1",
        productName: "Table Lamp",
        view: "View: 1.2k",
        price: "650",
        color: "#0A4B2A",
        image: "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604__340.png",
        name: 'Paul Rand',
    },
    {
        id: "2",
        productName: "Canon Camera",
        view: "View: 1.2k",
        price: "330",
        color: "#01579B",
        image: "https://cdn.pixabay.com/photo/2016/12/27/09/56/canon-1933637__340.png",
        name: 'Paul Rand',
    },
    {
        id: "3",
        productName: "Agfamatic 500",
        view: "View: 1.2k",
        price: "400",
        color: "#C91ECD",
        image: "https://cdn.pixabay.com/photo/2016/12/27/10/04/camera-1933648__340.png",
        name: 'Paul Rand',
    }
]

const Lists = ({ index, item }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: item.color, height: 100, width: 120, marginTop: 22, borderRadius: 8 }}>
                <Image source={{ uri: item.image }} style={[styles.image,]} />
            </View>
            <View style={{ justifyContent: 'center', }}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.productName}>{item.productName}</Text>
                    <Text>{item.name}</Text>
                </View>
                <Text style={styles.date}>{item.view}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </View>

    )
}

const Order = () => {
  return (
    <View>
        <HeaderPage />
      <Text>My Order</Text>

      <SafeAreaView>
                <FlatList 
                 data={ListData}
                 showsVerticalScrollIndicator={false}
                 renderItem={({ item }) => <Lists item={item} />}
                />
            </SafeAreaView>


      <Arrows />
    </View>
  )
}

export default Order;