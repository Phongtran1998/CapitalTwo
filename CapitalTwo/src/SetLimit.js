import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, Input, CardSection, Button } from './Components/common';

class SetLimit extends Component {
  state = { click: false, amount: '' }
  onbuttonPress() {
    this.setState({ click: true });
  }


  renderButton() {
    if (this.state.click) {
      return (
        <Text>Your limit for donation is: {this.state.amount}</Text>
      );
    }
}
  render() {
    return (
      <View>
        <Header headerText="Set Limit" />
        <Card>
          <CardSection>
            <Input
              placeholder="Amount"
              label="Your Limit"
              onChangeText={(amount) => this.setState({ amount })}
            />
          </CardSection>
          <CardSection>
            <Button whenPressed={() => this.onbuttonPress()}>Set Your Limit</Button>
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

export { SetLimit };
