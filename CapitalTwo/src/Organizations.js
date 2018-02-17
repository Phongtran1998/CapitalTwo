import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Header, Card, PickerExample, Input, PickerPeriod } from './Components/common';

class Organizations extends Component {
  render() {
    return (
      <View>
        <Header headerText="CharitalOne" />
        <Card>
          <PickerExample />
        </Card>
        <Card>
          <PickerPeriod />
        </Card>
        <Card>
          <CardSection>
            <Input
              placeholder="Amount"
              label="Donation  $"
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Organizations;
