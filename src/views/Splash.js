import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';

import splash from '../assets/styles/splash';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('session').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'NavigationRoutes'),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/splash.png')}
        style={{width: '50%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#800080"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = splash;
