import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/views/Splash';
import LoginScreen from './src/views/Login';
import NavigationRoutes from './src/views/NavigationRoutes';

const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="NavigationRoutes"
                    component={NavigationRoutes}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;