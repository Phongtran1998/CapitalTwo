import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Card, Button, CardSection } from './Components/common';
import MoneyDonated from './Components/MoneyDonated';

class InitialPage extends Component {
  render() {
    return (
      <View>
        <Header headerText="CharitalOne" />
        <MoneyDonated />
        <Card>
          <CardSection>
            <Button whenPressed={() => Actions.info()} >
              My Account
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default InitialPage;
