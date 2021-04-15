import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardItem} from 'native-base';
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
    iconName: 'help',
    quantity: 0,
  };

  render() {
    return (
      <Card style={card.container}>
        <CardItem style={card.item}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={this.props.iconName} size={35} color="#fff" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={card.title}>{this.props.quantity}</Text>
          </View>
        </CardItem>
        <CardItem style={card.item}>
          <View style={card.lineStyle} />
        </CardItem>
        <CardItem style={card.item}>
          <View style={{flexDirection: 'row'}}>
            <Text note style={card.subtitle}>
              {this.props.description}
            </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

const card = dash;

export default DashCard;
