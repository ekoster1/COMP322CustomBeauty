import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';

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
