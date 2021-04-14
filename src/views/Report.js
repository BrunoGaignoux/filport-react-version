import React from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import card from '../assets/styles/card';
import formReport from '../assets/styles/formReport';

const Report = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={cardStyle.viewArea}>
        <Card>
          <CardItem>
            <Left style={{flex: 0.8}}>
              <Icon name="create" size={20} color="#800080" />
              <Body>
                <Text style={cardStyle.title}>Formulário de relatório</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem content>
            <Body>
              <TextInput
                style={formReportStyle.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                style={formReportStyle.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
            </Body>
          </CardItem>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Report;

const cardStyle = card;
const formReportStyle = formReport;
