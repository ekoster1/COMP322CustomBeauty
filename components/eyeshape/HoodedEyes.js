import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../styles";

export default class HoodedEyes extends Component {
  static navigationOptions = {
    title: 'Hooded Eyes',
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
            style={styles.button}
            >
              <Text style={styles.text}>VIDEO</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

