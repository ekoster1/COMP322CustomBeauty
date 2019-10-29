import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../styles";

export default class CategoriesPage extends Component {
  static navigationOptions = ({navigation}) => {
    let headerTitle ='Face Shape';
    return { headerTitle }
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("HeartFace")}
            >
              <Text style={styles.text}>Heart-shaped Face</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("OvalFace")}
            >
              <Text style={styles.text}>Oval-shaped Face</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("RoundFace")}
            >
              <Text style={styles.text}>Round-shaped Face</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};