import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Card, CardSection } from './Components/common';

class MyAccount extends Component {
  render() {
    return (
      <View>
        <Header headerText="My Account" />
        <Card>
          <CardSection>
            <TouchableOpacity>
              <Text>Organizations</Text>
            </TouchableOpacity>
          </CardSection>
          <CardSection>
            <TouchableOpacity>
              <Text>Set Limit</Text>
            </TouchableOpacity>
          </CardSection>
          <CardSection>
            <TouchableOpacity>
              <Text>User Info</Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default MyAccount;
