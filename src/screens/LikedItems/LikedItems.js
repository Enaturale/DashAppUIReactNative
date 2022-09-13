import { Text, View, FlatList, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import styles from './Styles';
import HeaderPage from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const ListData = [
  {
    id: "1",
    productName: "Table Lamp",
    date: "12 Jan 2020",
    price: "650",
    color: "#0A4B2A",
    image: "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604__340.png"
  },
  {
    id: "2",
    productName: "Canon Camera",
    date: "12 Jan 2020",
    price: "330",
    color: "#01579B",
    image: "https://cdn.pixabay.com/photo/2016/12/27/09/56/canon-1933637__340.png",
  },
  {
    id: "3",
    productName: "Agfamatic 500",
    date: "12 Jan 2020",
    price: "400",
    color: "#C91ECD",
    image: "https://cdn.pixabay.com/photo/2016/12/27/10/04/camera-1933648__340.png",
  }
]

const Lists = ({ index, item }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: item.color, height: 100, width: 120, marginTop: 22, borderRadius: 8 }}>
        <Image source={{ uri: item.image }} style={[styles.image,]} />
      </View>
      <View style={{ justifyContent: 'center', }}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>

  )
}

const LikedItems = ({ navigation }) => {

  return (
    <View style={{ marginTop: 10 }}>
      <HeaderPage navigation={navigation} />
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: -79 }}>
        <Text style={styles.title}>Liked Items</Text>
      </View>

      <SafeAreaView>
        <FlatList
          data={ListData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Lists item={item} />}
        />
      </SafeAreaView>

      <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: "center", marginVertical: 20, }}>
        <Pressable>
          <Icon name="arrow-left-bold-box-outline" size={50} color="black" />
        </Pressable>


        <Pressable style={styles.pressable}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 1</Text>
        </Pressable>

        <Pressable style={styles.pressable}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 2</Text>
        </Pressable>

        <Pressable>
          <Icon name="arrow-right-bold-box-outline" size={50} color="black" />

        </Pressable>

      </View>



    </View>
  )

}

export default LikedItems;