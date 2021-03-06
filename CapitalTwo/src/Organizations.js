import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Button, CardSection,
  Header, Card, PickerExample, Input, PickerPeriod } from './Components/common';

class Organizations extends Component {
  state={ amount: 0, info: [] };
  onbuttonPress() {
    axios.post('http://api.reimaginebanking.com/accounts/5a87a87f5eaa612c093b0f21/withdrawals?key=6fbd1fec8587a95c4a307cc0283da47e', {
      medium: 'balance',
      transaction_date: '2018-02-18',
      status: 'pending',
      amount: parseInt(this.state.amount, 10),
      description: 'donation'
    });
      console.warn('typeof amount:', typeof this.state.amount);
  }
  render() {
    return (
      <View>
        {/*<Header headerText="CharitalOne" />*/}
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
              onChangeText={(amount) => this.setState({ amount })}
            />
          </CardSection>
          <CardSection>
            <Button whenPressed={() => this.onbuttonPress()}>Donate</Button>
          </CardSection>
          <CardSection>
            <Button whenPressed={() => Actions.initial()}>Stop Donating</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export { Organizations };
