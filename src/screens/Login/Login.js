import React from 'react';
import {View, Text, KeyboardAvoidingView, Pressable, Image, TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from './styles';

const Login = ({navigation}) => {
    const gobacktoMain = () =>{
        navigation.navigate("Home")
    }

    const gotoSignup = () => {
        navigation.navigate("Signup")
    }

    const gotoWelcome = () => {
        navigation.navigate("Dashboard");
    }
    return(
        <KeyboardAvoidingView>
            {/* Header section */}
            <View style={styles.header}>
                <Pressable onPress={gobacktoMain}>
                    <Icon name="arrow-left-box" size={44} color="#E86B62" />
                </Pressable>
                <View>
                  <Text style={styles.dash}>Dash</Text>
                </View>                
            </View>

            {/* Login section */}
            <View style={styles.loginSection}>
            <Text style={styles.loginText}>Login</Text>
           </View>

           <View style={styles.loginSection2}>
            <Text style={styles.logintextLonger}>Login with any of the following</Text>
           </View>

           <View style={styles.loginSection3}>
            <View>
                <Pressable style={styles.pressableBtn}>
                <Image 
                    source={require("../../../assets/images/google.png")}
                    style={styles.image}
                    />                    
                </Pressable>
            </View>

            <View>
                <Pressable style={styles.pressableBtn}>
                <Image 
                    source={require("../../../assets/images/twitter.png")}
                    style={{height: 50, width: 50}}
                    />
                </Pressable>
            </View>

            <View>
                <Pressable style={styles.pressableBtn}>                
                    <Icon  name="apple" size={40} color="black"/>
                </Pressable>
            </View>            
           </View>

           <View style={{marginLeft: 20, marginTop: 30,}}>
           
           </View>

           <View style={{flexDirection: 'row'}}> 
           <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center', marginLeft: 35,}} /> 
           <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 24, fontFamily: 'Segoe UI', color: 'black'}}>Or</Text> 
           <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center', marginRight: 28,}} /> 
           </View>

           <View style={{marginLeft: 30, marginTop: 30,}}>
            <View>
            <Text style={{fontSize: 20, fontFamily: "Segoe UI", marginBottom: 2,}}>Email</Text>
            <TextInput style={styles.textinput} />
            </View>
            <View style={{marginTop: 20,}}>
                <Text style={{fontSize: 20, fontFamily: "Segoe UI", marginBottom: 2,}}>Password</Text>
                 <TextInput style={styles.textinput} /> 
            </View>
           </View>

        {/* Login button and footer */}
           <View style={{alignItems:'center', marginTop: 30,}}>
            <Pressable style={styles.loginButton} onPress={gotoWelcome}>
                <Text style={styles.loginButonText}>
                    Login
                </Text>
            </Pressable>
           </View>

           <View style={{flexDirection: 'row', marginTop: 30, alignSelf:'center'  }}>
            <Text style={{fontSize: 17, fontFamily: 'Segoe UI', color:'black'}}>Don't have an account?</Text>
            <Pressable onPress={gotoSignup}>
            <Text style={{fontSize: 17, fontFamily: 'Segoe UI', color:'#E86B62'}}>Sign Up</Text>
            </Pressable>            
           </View>

        </KeyboardAvoidingView>
        
    )
}

export default Login;
