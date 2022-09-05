import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: 355,
        backgroundColor: '#E3E4E3',
        marginBottom: 20,
        marginHorizontal: 25,
        borderRadius: 20,      
    },
    miniContainer:{
        flexDirection: 'row',
        marginHorizontal:20,
        marginVertical: 30,
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 33,
        marginRight: 20,
    },
    productName:{
        fontSize: 18,
        fontFamily:"Segoe UI Bold",
        color:'black',
    },
    person:{
        fontSize: 16,
        fontFamily:"Segoe UI",
        color:'#E86B62',    
    },
    name:{
        color:"#E86B62",
        fontFamily:"Segoe UI",
        fontSize: 15,
    },
    message:{
        color:'black',
        fontFamily:"Segoe UI",
        fontSize: 15,
    }
})

export default styles;