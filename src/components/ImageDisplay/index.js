import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { imageHeight, imageWidth, wScale, hScale } from '../PerfectPixel'
import { Image } from 'react-native-elements';
// import { ActivityIndicator } from 'react-native-paper'

const ImageDisplay = ({ source, resizeMode }) => {
    return (
        <View style={styles.shadow}>
            <ImageZoom
                cropWidth={imageWidth}
                cropHeight={imageHeight}
                imageWidth={imageWidth}
                imageHeight={imageHeight}>
                <Image source={{
                    uri: source,
                }} style={styles.image}
                    resizeMode={resizeMode}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </ImageZoom>
        </View>
    );
}

export default ImageDisplay;

const styles = StyleSheet.create({
    image: {
        width: imageWidth,
        height: imageHeight,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        backgroundColor: "#0000",
        elevation: 24,
    }
})