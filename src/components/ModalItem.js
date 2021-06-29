import React, { PureComponent } from "react";
import { RNCamera } from 'react-native-camera';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    Dimensions
  } from 'react-native';
import {Card, CardItem} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import If from '../shared/If';
import formReport from '../assets/styles/formReport';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

const PendingView = () => (
    <View
     style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
     }}
    >
        <Text>Waiting</Text>
    </View>
);

class ModalItem extends PureComponent {
    state = {
        photos: [],
        camera: null,
        title: null,
        description: null
    }

    static propTypes = {
        show: PropTypes.bool,
        callback: PropTypes.func,
    };

    /**
     * Take a picture
     * @return {void} The photo uri to data items.
     */
    takePicture = async () => {
        const options = {
            quality: 0.5,
            base64: true,
            forceUpOrientation: true,
            fixOrientation: true,
            pauseAfterCapture: true
        };
        const {uri} = await this.camera
            .takePictureAsync(options)
            .then((data) => {
                this.setState({ photos: [...this.photos, ...data] })
            })
            .catch((err) => {
                throw err;
            });
        console.log(uri);
    };

    render() {
        return (
            <Modal 
                onBackdropPress={this.props.callback} 
                isVisible={this.props.show}
                swipeDirection='left'
                onSwipeComplete={this.props.callback}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
            >
            <View style={style.modal}>
              <View style={style.modalHeader}>
                <If
                  condition={true}
                  Else={<Text style={style.modalTextHeader}>Atualizar item</Text>}
                >
                  <Text style={style.modalTextHeader}>Criar item</Text>
                </If>
                <TouchableOpacity activeOpacity={0.5} onPress={this.props.callback}>
                  <Icon name="close" size={20} color="#800080" />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={style.viewArea}>
                  <View style={style.row}>
                    <TextInput
                      style={style.modalInputText}
                      onChangeText={value => this.setState({ title: value })}
                      value={this.title}
                      placeholder="Digite uma título"
                    />                    
                  </View>
                  <View style={style.row}>
                    <TextInput
                      style={style.textarea}
                      onChangeText={value => this.setState({ description: value })}
                      value={this.description}
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
                                onPress={this.takePicture}
                                style={style.buttonIcon}
                                activeOpacity={0.5}
                            >
                                <Icon name="camera-alt" size={25} color="#800080" style={{ marginRight: 10 }} />
                                <Text style={style.buttonTextStyle}>Adicionar anexos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <If condition={this.photos && this.photos.length > 0} Else={
                            <RNCamera
                              ref={ref => {
                                  this.camera = ref;
                              }}
                              style={style.preview}
                              type={RNCamera.Constants.Type.back}
                              autoFocus={RNCamera.Constants.AutoFocus.on}
                              flashMode={RNCamera.Constants.FlashMode.off}
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
                          }>
                            <FlatList
                              data={this.photos}
                              keyExtractor={(item, index) => item + index}
                              renderItem={({item}) => (
                                <View style={{flexDirection: 'column', padding: 5}}>
                                  <Image
                                    style={{width: 50, height: 50}}
                                    source={{
                                      uri: item.uri,
                                    }}
                                    resizeMode='contain'
                                  />
                                </View>
                              )}
                            />
                          </If>
                        </View>
                      </CardItem>
                    </Card>
                  </View>
                </View>
              </ScrollView>
              <View style={style.row}>
                <View style={style.cardItem}>
                  <TouchableOpacity style={style.buttons} activeOpacity={0.5}>
                    <Icon name="block" size={20} color="#800080" />
                    <Text style={style.buttonTextStyle}>Limpar</Text>
                  </TouchableOpacity>
                </View>
                <View style={{...style.cardItem, alignItems: 'flex-end'}}>
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
          </Modal>
        )
    }
};

const style = formReport;

export default ModalItem;