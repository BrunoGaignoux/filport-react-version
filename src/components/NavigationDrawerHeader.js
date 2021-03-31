import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavigationDrawerHeader = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Icon
                    name="menu"
                    size={30}
                    color="#fff"
                    style={{marginLeft: 15}}
                />
            </TouchableOpacity>
        </View>
    );
};
export default NavigationDrawerHeader;