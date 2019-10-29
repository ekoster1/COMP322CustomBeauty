import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {styles} from "../components/styles";

export default class CategoriesPage extends Component {
  static navigationOptions = {
    title: 'Categories',
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("FaceShape")}
            >
              <Text style={styles.text}>Face Shape</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SkinTone")}
            >
              <Text style={styles.text}>Skin Tone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("EyeShape")}
            >
              <Text style={styles.text}>Eye Shape</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SkinType")}
            >
              <Text style={styles.text}>Skin Tone</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

