import { Text, View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import HeaderPage from '../../components/Header/Header'
import Searchbar from '../../components/Searchbar/Searchbar'

import ExploreCarousel from './ExploreCarousel'
import List from './List'

const Explore = () => {

  return (
    <View>
      <HeaderPage />

      <Text style={style.title}>Explore</Text>

      <Searchbar />

      <View>
        <ExploreCarousel />
      </View>

      <View>

      </View>


      <View style={{ marginBottom: 400, }}>
        <List />
      </View>

    </View>
  )

};

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Segoe UI Bold',
    color: 'black',
    marginHorizontal: 20,
    marginTop: -40,

  },

})

export default Explore;