import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';

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
            onPress={() => this.props.navigation.navigate("Hooded Eyes")}
            >
              <Text style={styles.text}>Hooded Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Monolid Eyes")}
            >
              <Text style={styles.text}>Monolid Eyes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCFF',
    alignItems: 'center',
    justifyContent: 'center',
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
