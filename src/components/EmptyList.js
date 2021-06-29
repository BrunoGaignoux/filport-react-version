import React, { Component } from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

class EmptyList extends Component {
  static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {
      fontWeight: 'bold',
      color: '#b987e1',
      fontSize: 17,
    },
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={this.props.style}>Nenhum item até o momento</Text>
      </View>
    );
  }
}

export default EmptyList;
