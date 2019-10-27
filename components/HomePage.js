import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#CCCCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300, 
        margin: 10,
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        margin:20,
        padding:10,
        backgroundColor:"#F1E7E5",
        borderRadius: 10,
        width: 350,
        borderColor: "#FEBA95",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color:"#6666FC",
        fontSize: 20,
    }
});