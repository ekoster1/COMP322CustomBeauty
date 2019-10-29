import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../styles";

export default class CategoriesPage extends Component {
  static navigationOptions = ({navigation}) => {
    let headerTitle ='Skin Tone';
    return { headerTitle }
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            //onPress={() => this.props.navigation.navigate("One")}
            >
              <Text style={styles.text}>One</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            //onPress={() => this.props.navigation.navigate("Two")}
            >
              <Text style={styles.text}>Two</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            //onPress={() => this.props.navigation.navigate("Three")}
            >
              <Text style={styles.text}>Three</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            //onPress={() => this.props.navigation.navigate("Four")}
            >
              <Text style={styles.text}>Four</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};
