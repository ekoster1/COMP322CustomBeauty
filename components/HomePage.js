import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withOrientation } from 'react-navigation';
import {styles} from "../components/styles";

export default class HomePage extends Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      return (
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.image}/>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CategoriesPage")}>
              <Text style={styles.text}>Click to Start</Text>
          </TouchableOpacity>
          <View style={{height:100}}></View>
        </View>
      );
    }
  }

  