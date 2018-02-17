import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './Components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="CapitalTwo" />
      </View>
    );
  }
}

export default App;
