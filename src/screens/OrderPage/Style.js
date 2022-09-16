import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontFamily: 'Segoe UI Bold',
        color:'black'
    },
    container:{
        width: 350,
        height: 150,
        backgroundColor:"#8FDDFB",
        marginHorizontal: 22,
        marginVertical: 13,
        borderRadius: 15,
        flexDirection:'row'
    },
    image:{
        height: 70,
        width: 70,
    },
    productName:{
        fontSize: 20,
        color:'black',
        fontFamily:"Segoe UI Bold",
        marginBottom: 10,
    },
    date:{
        fontSize: 14,
        color:'black',
        fontFamily:"Segoe UI Bold",
        marginBottom: 5,

    },
    price:{
        fontSize: 18,
        color:'black',
        fontFamily:"Segoe UI Bold",
        marginBottom: 10,

    },
    

})

export default styles;