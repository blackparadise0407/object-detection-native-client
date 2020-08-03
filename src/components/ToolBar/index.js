import React, { useState } from 'react';
import { Appbar, Colors, ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { hScale } from '../PerfectPixel';

const Toolbar = ({
    onPress,
    screenName,
    navigation,
    file,
    handleDetect,
    isLoading
}) => {
    const [isActive, setActive] = useState(null)
    return (
        <Appbar style={styles.root}>
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Appbar.Action
                        size={30}
                        icon="navigation"
                        onPress={() => {
                            setActive("third")
                            navigation.navigate(`${screenName}`)
                        }}
                        isActive={isActive === 'third'}
                        color={isActive === 'third' ? Colors.lightBlue500 : Colors.grey900}
                        style={isActive === 'third' ? styles.btnActive : styles.btn}
                    />
                    <Text style={styles.text}>{screenName}</Text>
                </View>

                <View style={styles.btnContainer}>
                    {isLoading ? <ActivityIndicator
                        size={30} animating={true} color={Colors.grey900}
                    />
                        :
                        <>
                            <Appbar.Action
                                size={30}
                                icon="arrow-up-bold-hexagon-outline"
                                onPress={() => {
                                    setActive("second")
                                    file ? handleDetect() : alert("No file selected")
                                }}
                                // disabled={!file}
                                isActive={isActive === 'second'}
                                color={isActive === 'second' ? Colors.lightBlue500 : Colors.grey900}
                                style={isActive === 'second' ? styles.btnActive : styles.btn}
                            />
                            <Text style={styles.text}>Detect</Text>
                        </>
                    }
                </View>
                <View style={styles.btnContainer}>
                    <Appbar.Action
                        size={30}
                        icon={file ? 'cached' : 'plus'}
                        onPress={() => {
                            onPress()
                            setActive("first")
                        }}
                        isActive={isActive === 'first'}
                        color={isActive === 'first' ? Colors.lightBlue500 : Colors.grey900}
                        style={isActive === 'first' ? styles.btnActive : styles.btn}
                    />
                    <Text style={styles.text}>{file ? "Choose another" : "Choose image"}</Text>
                </View>
            </View>
        </Appbar>
    );
}

export default Toolbar;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: hScale(100)
    },
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    btnContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"

    },
    text: {
        fontSize: 10
    },
    btn: {
        // backgroundColor: "#eee"
        // transform: [
        //     { scale: 1 }
        // ]
    },
    btnActive: {
        backgroundColor: Colors.grey800,
        color: Colors.lightBlue500
        // transform: [
        //     { scale: 1.25 }
        // ]
        // position: "absolute"

    }
})