import {StyleSheet}  from "react-native";

const styles = StyleSheet.create({
    header:{
        justifyContent:'space-between',
        flexDirection: "row",     
        width: 350,
        height: 100,
        marginLeft: 30,
        marginTop: 30,
    },
    dash:{
        fontSize: 35,
        // fontWeight: "600",
        // alignSelf:'center',
        fontFamily:'Segoe UI Bold Italic',
        color: '#E86B62',
    },
    loginSection:{
        marginLeft: 30,
        
    },
    loginSection2:{
        marginLeft: 30,
        marginTop: 30,        
    },
    loginSection3:{
        marginLeft: 30,
        marginTop: 30,
        flexDirection: "row",
    },
    loginText:{
        fontSize: 35,
        color: "black",
        fontFamily: "Segoe UI Bold",
    },
    logintextLonger:{
        fontFamily:"Segoe UI",
        fontSize: 20,
        color:'black',
    },
    image:{
        height: 30,
        width: 30,
    },
    pressableBtn:{
        backgroundColor: '#CED8D3',
        borderColor:'#CED8D3',
        borderRadius: 10,
        width: 100,
        height: 50,
        marginRight: 25,
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center'

        
    },
    textinput:{
        height: 50,
        width: 350,
        borderWidth: 1,
        borderColor:'black',
        borderRadius: 5,
    },
    loginButton:{
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: '#E86B62',
        borderRadius: 5,
        backgroundColor: '#E86B62',
        alignItems:'center',
        justifyContent:'center'

    },
    loginButonText:{
        color: 'white',
        fontFamily:'Segoe UI Bold',
        fontSize:25,

    }

});

export default styles;