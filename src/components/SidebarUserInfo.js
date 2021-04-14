import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import userInfo from '../assets/styles/userInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getUserData(key) {
  const [letter, setLetter] = useState('?');
  const [nickname, setNickname] = useState('?');

  const user = AsyncStorage.getItem(key);

  useEffect(function readData() {
    try {
      if (
        typeof user !== 'undefined' &&
        user !== null &&
        typeof user === 'string'
      ) {
        const obj = JSON.parse(user);
        const arrName = obj.name.split(' ');
        const surname = arrName.length ? arrName[arrName.length - 1] : null;
        setLetter(obj.name.charAt(0) + surname.charAt(0));
        setNickname(obj.nickname);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  });

  return {
    letter,
    nickname,
  };
}

const SidebarUserInfo = () => {
  const user = getUserData('user');

  return (
    <View style={stylesSidebar.profileHeader}>
      <View style={stylesSidebar.profileHeaderPicCircle}>
        <Text style={{fontSize: 25, color: '#800080'}}>{user.letter}</Text>
      </View>
      <Text style={stylesSidebar.profileHeaderText}>
        {'Olá ' + user.nickname + ', seja bem vindo'}
      </Text>
    </View>
  );
};

export default SidebarUserInfo;

const stylesSidebar = userInfo;
