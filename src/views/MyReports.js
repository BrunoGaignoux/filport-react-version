import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import If from '../shared/If';
import card from '../assets/styles/card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyList from '../components/EmptyList';
import { RippleLoader } from 'react-native-indicator';

const MyReports = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  async function commit() {
    setInterval(() => {
      setLoader(!loader);
    }, 2000);
  }

  useEffect(async function getItems() {
    try {
      const reports = await AsyncStorage.getItem('@reports');

      if (reports) {
        setItems(JSON.parse(reports));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={cardStyle.viewArea}>
        <View style={cardStyle.viewList}>
          <If condition={items.length > 0} Else={<EmptyList />}>
            <FlatList
              data={items}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <Card style={cardStyle.style}>
                  <CardItem style={cardStyle.item}>
                    <Left style={{flex: 0.8}}>
                      <TouchableOpacity style={cardStyle.buttonAction}>
                        <Icon name="edit" size={25} color="#800080" />
                      </TouchableOpacity>
                    </Left>
                    <Right style={{flex: 0.2}}>
                      <TouchableOpacity style={cardStyle.buttonAction} onPress={commit}>
                        <Icon name="done" size={25} color="#800080" />
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem style={cardStyle.item}>
                    <Left style={{flex: 0.8, marginTop: 0}}>
                      <Body>
                        <Text style={cardStyle.title}>
                          Ordem de serviço {item.osName}
                        </Text>
                        <Text note style={cardStyle.subtitle}>
                          {item.created_at}
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem content style={cardStyle.item}>
                    <Text style={cardStyle.content} numberOfLines={4}>
                      {item.description}
                    </Text>
                  </CardItem>
                </Card>
              )}
            />
          </If>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyReports;

const cardStyle = card;
