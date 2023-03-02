import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Photo_page from './Photo_page';
import Favourite from './Favourite';
import All from './All';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
export default function StackFav() {
    return (
        //   <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Favourite"
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Photo_page" component={Photo_page} />
            <Stack.Screen name="Favourite" component={Favourite} />
            <Stack.Screen name="All" component={All} />

        </Stack.Navigator>
        //  </NavigationContainer>
    );
}
