import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#CCCCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 150, 
        margin: 10,
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        margin:20,
        padding:10,
        backgroundColor: "#CCCCFF",
        borderRadius: 10,
        width: 350,
        borderColor: "white",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: "white",
        fontSize: 20,
    }
});

export {styles};