import React from 'react'
import { Text, StatusBar, StyleSheet, View } from 'react-native'
import { IconButton, Color, Appbar, Colors } from 'react-native-paper'

const CustomAppBar = ({ navigate }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Appbar style={styles.top}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => console.log('Hello')}
                />
                < Appbar.Content title="Detections" subtitle="Subtitle" />
            </Appbar>
        </>
    )
}

export default CustomAppBar

const styles = StyleSheet.create({
    top: {
        position: 'relative',
        // left: 0,
        // right: 0,
        // top: 0,
        backgroundColor: "#fff",
        // shadowOffset: {
        //     width: 0,
        //     height: -5
        // },
        // shadowOpacity: 5,
        // shadowRadius: 2,
        // shadowColor: "black",
    },
    title: {
        fontSize: 15
    },
    above: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    below: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});