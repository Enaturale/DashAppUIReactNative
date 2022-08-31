import {StyleSheet}  from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: 300,
        width: 356,
        marginLeft: 24,
        marginVertical: 20,
        borderRadius: 20,     
        justifyContent:'center',
        alignContent:'center',  
        alignItems:'center'

    },
    mainContainer:{
        marginBottom: 130,
        
    },
    title:{
        color:'white',
        fontSize: 25,
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
        fontSize: 21
    },
    price:{
        color:'white',
        fontFamily:"Segoe UI",
        fontSize: 20
    }

})

export default styles