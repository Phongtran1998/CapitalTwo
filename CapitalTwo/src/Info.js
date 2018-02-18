import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './Components/common';
import MainScreen from './Components/MainScreen';


class Info extends Component {
  render() {
    return (
      <View>
        <Header headerText="Info" />
        <MainScreen />
      </View>
    );
  }
}

export { Info };
