import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const NavigationHeader = (props) => {
    const logout = () => {
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
    };

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={logout}>
                <Icon
                    name="logout"
                    size={30}
                    color="#fff"
                    style={{marginRight: 15}}
                />
            </TouchableOpacity>
        </View>
    );
};
export default NavigationHeader;