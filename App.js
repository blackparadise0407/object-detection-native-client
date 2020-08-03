import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native-paper';
//CUSTOM COMPONENT IMPORT
import { HomeScreen, DetectScreen } from './src/screens'
import { Image, View, Text } from 'react-native';
import { wScale, hScale } from './src/components/PerfectPixel';

const Stack = createStackNavigator();

const Logo = () => {
    return (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./src/assets/images/track.png')}
            />
            <Text style={{ marginLeft: 5, fontWeight: "700", fontSize: 20, color: Colors.grey900 }}>Object Detection</Text>
        </View>
    )
}


const App = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerTitle: props => <Logo {...props} />,
                            // title: 'Object Detection',
                            headerStyle: {
                                backgroundColor: Colors.white,
                            },
                            headerTintColor: Colors.grey900,
                            headerTitleStyle: {
                                fontWeight: "bold",
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Detect"
                        component={DetectScreen}
                        options={{
                            title: 'Detect',
                            headerStyle: {
                                backgroundColor: Colors.white,
                            },
                            headerTintColor: Colors.grey900,
                            headerTitleStyle: {
                                fontWeight: "bold",
                            },
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App

