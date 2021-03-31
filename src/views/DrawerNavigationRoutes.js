import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../views/Home';
import ReportScreen from '../views/Report';
import SidebarMenu from '../components/SidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Dashboard', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#800080', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const createReportScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="CreateReportScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#800080', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="CreateReportScreen"
                component={ReportScreen}
                options={{
                    title: 'Criar relatório', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: {marginVertical: 5, color: 'white'},
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            screenOptions={{headerShown: false}}
            drawerContent={SidebarMenu}>
            <Drawer.Screen
                name="homeScreenStack"
                options={{drawerLabel: 'Dashboard'}}
                component={homeScreenStack}
            />
            <Drawer.Screen
                name="createReportScreenStack"
                options={{drawerLabel: 'Criar relatório'}}
                component={createReportScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;