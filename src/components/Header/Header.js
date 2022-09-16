import React from 'react'

import { View, Text, Pressable, StyleSheet } from 'react-native';
import Menu from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {useNavigation} from '@react-navigation/native'


const HeaderPage = () => {
    const navigation  = useNavigation();
    const gobacktoMain = () => {
        return (
            navigation.navigate("Dashboard")
        )
    }
    return (
        <View style={{
            marginVertical: 20,
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: "row",
            width: 380,
            height: 100,
        }}>
            <View>
                <Pressable onPress={() => navigation.navigate('DashboardPage')}>
                    <Icon name="arrow-left-box" size={35} color="#E86B62" />
                </Pressable>
            </View>

            <View>
                <Pressable >
                    <Menu name="menu" color={"#E86B62"} size={35} style={{ marginRight: 30, }} />
                </Pressable>
            </View>
        </View>

    )
}

export default HeaderPage;