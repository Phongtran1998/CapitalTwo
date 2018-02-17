import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from './Components/common';
import MainScreen from './Components/MainScreen';


class Info extends Component {
  render() {
    return (
      <View>
        <Header headerText="Info" />
        <MainScreen />
        <TouchableOpacity onPress={() => Actions.test()}>
          <Text>
            Test
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Info;
