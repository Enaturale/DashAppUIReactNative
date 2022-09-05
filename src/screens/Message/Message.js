import { Text, View, Image } from 'react-native'
import React from 'react'
import HeaderPage from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';

import styles from './Styles';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';

const ListData = [
  {
    id: "1",
    productName: "iWatch 6",
    message: "Does it come with an additional battery?",
    name: "Paula Rand",
    avatar: "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg",
    person: "You",
    time: "8:23am",
  },
  {
    id: "2",
    productName: "iWatch 16",
    message: "Sorry, I am not selling again",
    name: "Betty Sam",
    avatar: "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg",
    person: "Betty",
    time: "8:23am",
  },
  {
    id: "3",
    productName: "JBL Speaker",
    message: "How many hours can it go?",
    name: "John Doe",
    avatar: "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg",
    person: "You",
    time: "8:23am",
  },
  {
    id: "4",
    productName: "Antique Table",
    message: "Are you sure it won't break?",
    name: "Betty Neel",
    avatar: "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg",
    person: "Betty",
    time: "8:23am",
  },


]

const Listed = ({ index, item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.miniContainer}>
        <View >
          <Image source={{ uri: item.avatar }} style={styles.image} />
        </View>
        <View>
          <View style={{flexDirection:'row', marginTop: 10,}}>
            <Text style={styles.productName}>{item.productName} | </Text>
            <Text style={styles.person}>{item.name}</Text>
          </View>

          <View style={{flexDirection:'row', width: 200, marginTop: 10,}}>
            <Text style={styles.name}>{item.person}: </Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>

          <Text style={{marginLeft: 130, color:'black', marginTop: 9}}>{item.time}</Text>
        </View>

      </View>

    </View>

  )

}


const Message = () => {

  return (
    <View style={{ marginTop: 20, marginBottom: 300, backgroundColor: 'white' }}>
      <HeaderPage />


      <View style={{ marginTop: -80 }}>
        <Searchbar />

      </View>

      <SafeAreaView>
        <FlatList
          data={ListData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Listed item={item} />}
        />
      </SafeAreaView>


    </View>
  )

}

export default Message;