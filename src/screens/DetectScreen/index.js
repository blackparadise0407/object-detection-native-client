import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';


//CUSTOM COMPONENT IMPORT
import { ImageDisplay, Toolbar } from '../../components';
import detectApi from '../../api/detectApi'
import { hScale, wScale } from '../../components/PerfectPixel';
import Axios from 'axios';

const options = {
    title: 'Select your picture',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

// const Picker = 

const HomeScreen = ({ navigation }) => {
    const [file, setFile] = useState(null)
    const [output, setOutput] = useState({})
    const [arr, setArr] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const handlePress = (e) => {
        ImagePicker.showImagePicker(options, async (response) => {
            const { uri, type, fileName } = response
            let file = { uri, type, name: fileName }
            // console.log('File = ', file);
            if (response.didCancel) {
                // console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else {
                //HANDLE THE FILE
                setFile(file)
                setOutput({})
            }
        });
    }
    const handleDetect = async (e) => {
        setIsLoading(true)
        try {
            let body = new FormData()
            body.append('images', file)
            const resp = await detectApi.image(body)
            setOutput(resp.response[0])
            setArr(resp.response[0].responses)
            // console.log(resp.response[0]);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }
    }

    const format = (str) => {
        const arr = str.split("_")
        return arr.join(" ")
    }
    const RenderClass = () => {
        if (arr.length) {
            return (
                <View style={styles.ul}>
                    {arr.map((item, index) => (<View key={index} style={styles.li}><Text style={
                        styles.liText}>Dog {index + 1}</Text><Text style={styles.liText} >{format(item.class)} - {item.confidence}%</Text></View>))}
                </View>
            )
        } else return <Text style={styles.warnText}>Sorry we cannot detect which breed it is</Text>
    }
    useEffect(() => {
        // console.log("File: ", file, "\nOutput: ", output);
    }, [file, output])
    return (
        <SafeAreaView style={styles.root}>

            <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.image}>
                <ScrollView >
                    <View style={styles.center}>
                        <Text style={styles.text}>Your image</Text>
                        <ImageDisplay resizeMode="cover" source={file && file.uri} />
                    </View>
                    <View style={styles.center}>
                        {!output.responses ? <Text style={styles.text}>Detected object</Text> : <RenderClass />}
                        <ImageDisplay resizeMode="contain" source={output.image ? `http://localhost:5000/uploads/${output.image}` : null} />
                    </View>
                </ScrollView>

                <Toolbar
                    isLoading={isLoading}
                    file={file}
                    screenName="Home"
                    navigation={navigation}
                    handleDetect={e => handleDetect(e)}
                    onPress={e => handlePress(e)} />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.grey300,
    },
    image: {
        paddingBottom: hScale(100),
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    center: {
        alignItems: "center",
        flex: 1,
        justifyContent: "space-evenly"
    },
    ul: {
        // backgroundColor: Colors.lightBlue400,
        width: "100%",
    },
    li: {
        textAlign: "right",
        color: Colors.lightBlue500,
        backgroundColor: Colors.grey800,
        // borderRadius: 2,
        paddingVertical: hScale(5),
        paddingHorizontal: wScale(10),
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    liText: {
        color: Colors.lightBlue500,
        textTransform: "capitalize"
    },
    warnText: {
        color: Colors.black,
        backgroundColor: Colors.red500,
        width: "100%",
        textAlign: 'center'
    },
    text: {
        backgroundColor: Colors.lightBlue500,
        borderRadius: 2,
        paddingHorizontal: wScale(10),
        paddingVertical: hScale(6),
        textTransform: 'uppercase',
        color: Colors.grey900,
        fontWeight: "bold"
    }
})
