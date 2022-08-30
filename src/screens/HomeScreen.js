import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



const HomeScreen = ({navigation}) => {
  const gotoLogin = () => {
    navigation.navigate('Login');
  }

  return ( 
    <LinearGradient colors={['#E86B62', '#1F2758']} style={styles.linearGradient}>
     <View style = {styles.container} >     
          
          <View >
                <Pressable style = {styles.pressable} onPress={gotoLogin} >
                    <Text style = {styles.text} > Dash </Text> 
                 </Pressable > 
            </View>           
          
          
      
    </View>
    </LinearGradient > 
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    height: "100%",
    //  flex: 1,
  },
  linearGradient:{
    height: 800,
    width: 450,

  },
  pressable: {
    alignSelf: 'center',
    //flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: 100,
    width: 150,
    backgroundColor:'white',
    borderRadius: 10,

  },
  text: {
    fontSize: 35,
    // fontWeight: "600",
    alignSelf:'center',
    fontFamily:'Segoe UI Bold Italic',
    color: '#E86B62',
  },
});

export default HomeScreen;