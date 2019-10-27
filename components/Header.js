import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator } from 'react-navigation'

const Header = createStackNavigator({
    Home: {
        screen:Home,
        navigationOptions:{
            title: 'Bes Beau'
        }
    }
});

export default Header;
