import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Card, Input, CardSection } from './Components/common';

class SetLimit extends Component {
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

export { SetLimit };
