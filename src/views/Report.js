/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formReport from '../assets/styles/formReport';
import Select from 'react-native-picker-select';
import If from '../shared/If';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      addPhotoItem(data.uri);
      console.log(data.uri);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
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
            placeholder={{label: 'Selecione uma ordem ativa', value: null}}
            value={os}
            Icon={() => {
              return <Icon name="arrow-drop-down" size={30} color="#800080" />;
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
                <If
                  condition={photos.length > 0}
                  Else={<Text style={{opacity: 0.5}}>Adicionar anexos</Text>}
                >
                  <Text style={{opacity: 0.5}}>Lista de fotos</Text>
                </If>
              </View>
            </CardItem>
            <CardItem style={style.cardItem}>
              <View style={{flexDirection: 'row'}}>
                <RNCamera
                  ref={(ref) => {
                    setCamera(ref);
                  }}
                  style={style.preview}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.on}
                  androidCameraPermissionOptions={{
                    title: 'Permissão para usar a câmera',
                    message: 'Nós precisamos de sua permissão para usar a câmera do seu telefone',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                  }}
                  androidRecordAudioPermissionOptions={{
                    title: 'Permissão para gravar áudio',
                    message: 'Nós precisamos de sua permissão para usar o áudio do seu telefone',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                  }}
                  onGoogleVisionBarcodesDetected={({barcodes}) => {
                    console.log(barcodes);
                  }}
                />
                <TouchableOpacity
                  onPress={takePicture.bind()}
                  style={style.buttonIcon}
                  activeOpacity={0.5}
                >
                  <Icon name="add-a-photo" size={30} color="#800080" />
                </TouchableOpacity>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={style.row}>
          <View style={style.cardItem}>
            <TouchableOpacity style={style.buttons} activeOpacity={0.5}>
              <Icon name="block" size={20} color="#fff" />
              <Text style={style.buttonTextStyle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View style={style.cardItem}>
            <TouchableOpacity style={style.buttons} activeOpacity={0.5}>
              <Icon name="save" size={20} color="#fff" />
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
    </SafeAreaView>
  );
};

const style = formReport;
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: 412,
    color: '#333333',
    height: 55,
    fontSize: 18,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 30,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#e3e3e3',
    shadowColor: '#dadae8',
    shadowOpacity: 2,
    backgroundColor: '#fff',
  },
});

export default Report;
