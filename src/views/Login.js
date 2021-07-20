import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';
import login from '../assets/styles/login';
import service from '../services/default';

const Login = ({navigation}) => {
  const [document, setUserDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const handleSubmitPress = () => {
    setErrors('');

    if (!document) {
      setErrors('Por favor, digite seu cpf');
      return;
    }

    setLoading(true);

    service.login(document).then((responseJson) => {
          setLoading(false);
          if (responseJson.success) {
            AsyncStorage.setItem('@user', JSON.stringify(responseJson.user));
            AsyncStorage.setItem(
                '@session',
                JSON.stringify(responseJson.session),
            );
            AsyncStorage.setItem(
                '@reports',
                JSON.stringify(responseJson.reports),
            );
            AsyncStorage.setItem('@os', JSON.stringify(responseJson.osList));
            navigation.replace('NavigationRoutes');
          } else {
            setErrors('Erro ao logar: ' + responseJson.message);
          }
        })
        .catch((error) => {
          setLoading(false);
          setErrors('Erro interno: ' + error);
          console.error(error);
        });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/img/logo.png')}
                style={{
                  height: 120,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInputMask
                style={styles.inputStyle}
                onChangeText={(formatted, extracted) => {
                  setErrors('');
                  setUserDocument(formatted);
                }}
                mask={'[000].[000].[000]-[00]'}
                placeholder="Digite seu cpf"
                placeholderTextColor="#aaaaaa"
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="number-pad"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            {errors !== '' ? (
              <Text style={styles.errorTextStyle}>{errors}</Text>
            ) : null}
            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.buttons}
                  activeOpacity={0.5}
                  disabled={true}
                >
                  <Icon name="trending-down" size={20} color="#800080" />
                  <Text style={styles.buttonsTextStyle}>Vendas</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.buttons}
                  activeOpacity={0.5}
                  disabled={true}
                >
                  <Icon name="assignment" size={20} color="#800080" />
                  <Text style={styles.buttonsTextStyle}>Relatórios</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.copyTextStyle}>
              UxSoftware - Todos os direitos reservados
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = login;
