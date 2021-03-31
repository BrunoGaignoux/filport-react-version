import React from 'react';
import {View, Text, Alert} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import menu from "../assets/styles/menu";
import SidebarUserInfo from "./SidebarUserInfo";

const SidebarMenu = (props) => {
    function logout() {
        props.navigation.toggleDrawer();
        Alert.alert(
            'Sair',
            'Você tem certeza que quer deslogar?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => {
                        return null;
                    },
                },
                {
                    text: 'Confirmar',
                    onPress: () => {
                        AsyncStorage.clear();
                        props.navigation.replace('Auth');
                    },
                },
            ],
            {cancelable: false},
        );
    }

    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <SidebarUserInfo/>
            <View style={stylesSidebar.profileHeaderLine}/>
            <DrawerContentScrollView {...this.props}>
                <DrawerItemList {...this.props} />
                <DrawerItem
                    label={({color}) =>
                        <Text style={{color: '#d8d8d8'}}>
                            Sair
                        </Text>
                    }
                    onPress={logout}
                />
            </DrawerContentScrollView>
        </View>
    );

}

export default SidebarMenu;

const stylesSidebar = menu;