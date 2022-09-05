import { Text, View, FlatList } from 'react-native'
import React from 'react'

import styles from './Styles';
import HeaderPage from '../../components/Header/Header';

const LikedItems = () => {
 
    return (
      <View style={{marginTop: 10}}>
        <HeaderPage />
        <View style={{alignContent:'center', alignItems:'center', marginTop: -79}}>
           <Text style={styles.title}>Liked Items</Text>
        </View>
        
      </View>
    )
  
}

export default LikedItems;