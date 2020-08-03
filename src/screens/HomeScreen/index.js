import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, ImageBackground, Text, View } from 'react-native';
import { Button, TouchableRipple, Colors } from 'react-native-paper'
import { wScale, hScale } from '../../components/PerfectPixel';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.image}>
                <View style={styles.container}>
                    <TouchableRipple>
                        <Button
                            icon="camera"
                            mode="contained"
                            color={Colors.lightBlue500}
                            onPress={() => navigation.navigate('Detect')}
                            labelStyle={{ color: Colors.grey900 }}
                        >
                            Get Started
                    </Button>
                    </TouchableRipple>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}


export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        alignItems: "center"
    },
})