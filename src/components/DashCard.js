import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Center, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dash from '../assets/styles/dash';
import PropTypes from 'prop-types';

class DashCard extends Component {
  static propTypes = {
    iconName: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {
    iconName: 'question',
    quantity: 0,
  };

  render() {
    return (
      <Card>
        <CardItem style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Center style={{ flex: 1 }}>
              <Icon name={this.props.iconName} size={30} color="#fff" />
            </Center>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Center style={{ flex: 1 }}>
              <Text style={card.title}>{this.props.quantity}</Text>
            </Center>
          </View>
        </CardItem>
        <View style={card.lineStyle} />
        <CardItem>
          <Center style={{ flex: 0.8, marginTop: 0 }}>
            <Body>
              <Text note style={card.subtitle}>
                {this.props.description}
              </Text>
            </Body>
          </Center>
        </CardItem>
      </Card>
    );
  }
}

const card = dash;

export default DashCard;
