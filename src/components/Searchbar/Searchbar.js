import React from "react";
import {View, Text, TextInput, Keyboard, StyleSheet} from 'react-native'
import Search from "react-native-vector-icons/MaterialIcons";


const Searchbar = () => {
    return(
        <View style={styles.container}>
            <TextInput 
              placeholder="Search"
              style={styles.input}
            />
            <Search  name="search" color={"#E86B62"} size={38} style={{paddingRight: -20,}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin: 20,
        borderRadius: 5,
        borderWidth: 1.5,
        alignItems:'center',
    },
    input:{
        width: '80%',
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: 'Segoe UI',
        color:'black'
    }
})

export default Searchbar;
