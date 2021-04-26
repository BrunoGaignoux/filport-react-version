/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formReport from '../assets/styles/formReport';
import Select from 'react-native-picker-select';
import If from '../shared/If';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyList from '../components/EmptyList';

const Report = () => {
  const [os, onChangeOs] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [camera, setCamera] = useState(null);
  const [orders, setOrders] = useState([]);
  const [photos, addPhotoItem] = useState([]);

  useEffect(async function getOsList() {
    try {
      const osList = await AsyncStorage.getItem('@os');

      if (osList) {
        setOrders(JSON.parse(osList));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  }, []);

  /**
   * Take a picture
   * @return {void} The photo uri to data items.
   */
  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };
      const {uri} = await camera
          .takePictureAsync(options)
          .then((data) => {
            addPhotoItem([...photos, data]);
          })
          .catch((err) => {
            throw err;
          });
      console.log(uri);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={style.viewArea}>
          <View style={style.row}>
            <Select
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 28,
                  right: 12,
                },
              }}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => onChangeOs(value)}
              items={orders}
              placeholder={{label: 'Selecione uma OS', value: null}}
              value={os}
              Icon={() => {
                return (
                  <Icon name="arrow-drop-down" size={30} color="#800080" />
                );
              }}
            />
          </View>
          <View style={style.row}>
            <TextInput
              style={style.textarea}
              onChangeText={onChangeNumber}
              value={number}
              multiline={true}
              numberOfLines={1000}
              placeholder="Digite uma descrição"
            />
          </View>
          <View style={style.row}>
            <Card style={style.card}>
              <CardItem style={style.cardItem}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={takePicture}
                    style={style.buttonIcon}
                    activeOpacity={0.5}
                  >
                    <Icon name="add" size={30} color="#800080" />
                    <Text style={style.buttonTextStyle}>Limpar</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <If condition={photos.length > 0} Else={<EmptyList />}>
                    <FlatList
                      data={photos}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item}) => (
                        <View style={{flexDirection: 'column', padding: 5}}>
                          <Image
                            style={{width: 50, height: 50}}
                            source={{
                              uri: item.uri,
                            }}
                          />
                        </View>
                      )}
                    />
                  </If>
                </View>
              </CardItem>
              {/* <CardItem style={style.cardItem}>
                <View style={{flexDirection: 'row'}}>
                  <RNCamera
                    ref={(ref) => {
                      setCamera(ref);
                    }}
                    style={style.preview}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                      title: 'Permissão para usar a câmera',
                      message:
                        'Nós precisamos de sua permissão para usar a câmera do seu telefone',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancelar',
                    }}
                    androidRecordAudioPermissionOptions={{
                      title: 'Permissão para gravar áudio',
                      message:
                        'Nós precisamos de sua permissão para usar o áudio do seu telefone',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancelar',
                    }}
                  />
                </View>
              </CardItem> */}
            </Card>
          </View>
          <View style={style.row}>
            <View style={style.cardItem}>
              <TouchableOpacity style={style.buttons} activeOpacity={0.5}>
                <Icon name="block" size={20} color="#800080" />
                <Text style={style.buttonTextStyle}>Limpar</Text>
              </TouchableOpacity>
            </View>
            <View style={style.cardItem}>
              <TouchableOpacity style={style.buttons} activeOpacity={0.5}>
                <Icon name="save" size={20} color="#800080" />
                <If
                  condition={true}
                  Else={<Text style={style.buttonTextStyle}>Atualizar</Text>}
                >
                  <Text style={style.buttonTextStyle}>Criar</Text>
                </If>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = formReport;
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    color: '#333333',
    width: '100%',
    height: 55,
    fontSize: 18,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: '50%',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#e3e3e3',
    shadowColor: '#dadae8',
    shadowOpacity: 2,
    backgroundColor: '#fff',
  },
});

export default Report;
