import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 4,
        // backgroundColor: "#83c6d1",
        alignItems: "center",
        justifyContent: "center",
        padding: 40
    },
    title: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 30,
    },
    touch: {
        fontFamily: "Avenir", 
        fontSize: 20, 
        fontWeight: "900", 
        padding: 5, 
        color: "#33818e"
    },
    image: {
        width: 250, 
        height: 250, 
        margin: 10
    },
    flatlist: {
        fontFamily: "Avenir", 
        fontSize: 20, 
        fontWeight: "600", 
        textAlign: "center", 
        marginTop: 10
    }
});