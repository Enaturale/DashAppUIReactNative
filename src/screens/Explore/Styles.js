import {StyleSheet}  from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: 370,
        width: 359,
        marginLeft: 24,
        marginTop:20,
        borderRadius: 10,  
     
    },
    mainContainer:{
        marginBottom: 130,  
    },
    title:{
        color:'white',
        fontSize: 24,
        fontFamily: "Segoe UI Bold"
    },
    location:{
        color:'white',
        fontFamily:"Segoe UI",
        fontSize: 21
    },
    productName:{
        color:'white',
        fontFamily:"Segoe UI Bold",
        fontSize: 21,
        marginBottom: 7,
    },
    price:{
        color:'white',
        fontFamily:"Segoe UI Bold",
        fontSize: 18
    },
    topSection:{
        flexDirection:"row",
        marginHorizontal: 20,
        width: 200,
        justifyContent:'space-around',
        marginTop: 20,
    },
    bottomSection:{
        marginHorizontal: 40,
        marginVertical: 20,
    },
    image:{
        height: 170,
        width: 300,        
    },
    imageSection:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        width: 330,
        marginVertical: 20,

    }

})

export default styles