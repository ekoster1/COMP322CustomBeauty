import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../styles";

export default class CategoriesPage extends Component {
  static navigationOptions = ({navigation}) => {
    let headerTitle ='Eye Shape';
    return { headerTitle }
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("AlmondEyes")}
            >
              <Text style={styles.text}>Almond Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("HoodedEyes")}>
              <Text style={styles.text}>Hooded Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("MonolidEyes")}
            >
              <Text style={styles.text}>Monolid Eyes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};