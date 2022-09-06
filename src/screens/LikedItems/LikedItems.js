import { Text, View, FlatList } from 'react-native'
import React from 'react'

import styles from './Styles';
import HeaderPage from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';

const ListData=[
  {
    id:"1",
    productName:"",
    name:"",
    searched:"",
    price:"",

  },
  {
    id:"2",
    
  }
]

const LikedItems = ({navigation}) => {
 
    return (
      <View style={{marginTop: 10}}>
        <HeaderPage />
        <View style={{alignContent:'center', alignItems:'center', marginTop: -79}}>
           <Text style={styles.title}>Liked Items</Text>
        </View>

        <Searchbar />
        
      </View>
    )
  
}

export default LikedItems;