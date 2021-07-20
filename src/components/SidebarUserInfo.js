import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import userInfo from '../assets/styles/userInfo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SidebarUserInfo = () => {
  const [letter, setLetter] = useState('?');
  const [nickname, setNickname] = useState('?');

  useEffect(async function readData() {
    try {
      const user = await AsyncStorage.getItem('@user');

      if (user) {
        const obj = JSON.parse(user);
        const arrName = obj.name.split(' ');
        const surname = arrName.length ? arrName[arrName.length - 1] : null;
        setLetter(obj.name.charAt(0) + surname.charAt(0));
        setNickname(obj.nickname);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  }, []);

  return (
    <View style={stylesSidebar.profileHeader}>
      <View style={stylesSidebar.profileColumn}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 30, color: '#800080'}}>{letter}</Text>
        </View>
      </View>
      <View style={stylesSidebar.profileColumn}>
        <Text style={stylesSidebar.profileHeaderText}>
          {'Olá ' + nickname + ', seja bem vindo'}
        </Text>
      </View>
    </View>
  );
};

export default SidebarUserInfo;

const stylesSidebar = userInfo;
