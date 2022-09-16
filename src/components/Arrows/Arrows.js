import { Text, View, StyleSheet, Pressable } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

const Arrows = () => {

    return (
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: "center", marginVertical: 20, }}>
        <Pressable>
          <Icon name="arrow-left-bold-box-outline" size={50} color="black" />
        </Pressable>


        <Pressable style={styles.pressable}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}> 1</Text>
        </Pressable>

        <Pressable style={styles.pressable}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}> 2</Text>
        </Pressable>

        <Pressable>
          <Icon name="arrow-right-bold-box-outline" size={50} color="black" />

        </Pressable>

      </View>
    )
  
}
const styles = StyleSheet.create({
    pressable:{
        height: 40, 
        width: 45, 
        borderRadius: 5, 
        borderColor:'black', 
        borderWidth: 1,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 10,


    }
})

export default Arrows;