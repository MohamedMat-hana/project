import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllDessert from './AllDessert';
import CommonDessert from './CommonDessert';
import Food from './Food';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
const { width, height } = Dimensions.get('window');

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


function Dessert() {

    return (

        <NavigationContainer style={{ backgroundColor: "#0c0c0c" }} independent={true}>
            {/* <View style={styles.Header}>
                <View style={styles.nameStackView}>
                    <Text style={styles.textnameStackView}>
                        الأكلات
                    </Text>
                </View>
            </View> */}
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: COLORS.black50,
                    tabBarLabelStyle: { backgroundColor: "#F2A365", borderRadius: 10, paddingHorizontal: 25, paddingVertical: 5, fontSize: 16 },
                    tabBarStyle: {
                        backgroundColor: COLORS.black, alignSelf: "center",
                        width: "100%",
                    },
                }}
            >
                <Tab.Screen
                    name="AllDessert"
                    component={AllDessert}
                    options={{
                        tabBarLabel: 'الكل',
                        width: 25,
                    }}
                />
                <Tab.Screen
                    name="CommonDessert"
                    component={CommonDessert}
                    options={{ tabBarLabel: 'الشائع' }}
                />
             </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.black,
        // marginTop: MARGIN.xxsMargin,
        alignItems: "center",
        // height: height
    },
    nameStackView: {
        // backgroundColor: COLORS.white,
        width: width / 1.05,
        height: height / 15,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: MARGIN.xsMargin
    },
    textnameStackView: {
        fontSize: FONTS.h3,
        color: COLORS.ButtonWhite,
        fontWeight: "bold"
    },

});

export default Dessert;
