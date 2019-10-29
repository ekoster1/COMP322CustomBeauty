import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../styles";

export default class HeartFace extends Component {
  static navigationOptions = {
    title: 'Heart-shaped Face',
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
            style={styles.button}>
              <Text style={styles.text}>How to Contour Your Heart Shaped Face</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};
