import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Card, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formReport from '../assets/styles/formReport';
import Select from 'react-native-picker-select';
import If from '../shared/If';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyList from '../components/EmptyList';
import ModalItem from '../components/ModalItem';

const Report = () => {
  const [os, onChangeOs] = useState(null);
  const [description, onChangeDescription] = useState(null);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

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

  useEffect(async function getItemsList() {
    try {
      const list = await AsyncStorage.getItem('@report-items');

      if (list) {
        setItems(JSON.parse(list));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  }, []);

  async function modalItem() {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={style.viewArea}>
          <View style={{flex: 1}}>
            <Select
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 25,
                  right: 20,
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
              onChangeText={onChangeDescription}
              value={description}
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
                    onPress={modalItem}
                    style={style.buttonIcon}
                    activeOpacity={0.5}
                  >
                    <Icon name="add" size={25} color="#800080" />
                    <Text style={style.buttonTextStyle}>Adicionar item</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <If condition={items.length > 0} Else={<EmptyList />}>
                    {/*<FlatList
                      data={photos}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item}) => (
                        <View style={{flexDirection: 'column', padding: 5}}>
                          
                        </View>
                      )}
                      />*/}
                  </If>
                </View>
              </CardItem>
            </Card>
          </View>
          <ModalItem show={visible} callback={modalItem} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

const style = formReport;
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    color: '#333333',
    height: 55,
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 11,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#e3e3e3',
    shadowColor: '#dadae8',
    shadowOpacity: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default Report;
