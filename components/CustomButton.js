import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={this.handlePress}>
            <View style={styles.button}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    title:{
        color:"#6666FC",
        fontSize: 20,
        /*fontWeight: 200*/
    }
});

export default CustomButton;

