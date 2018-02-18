import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Card, Input, CardSection } from './Components/common';

class MyAccount extends Component {
  render() {
    return (
      <View>
        <Header headerText="Set Limit" />
        <Card>
          <CardSection>
            <Input
              placeholder="Amount"
              label="Your Limit"
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default MyAccount;
