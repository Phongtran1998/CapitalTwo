import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

const MainScreenDetail = ({ apiText }) => {
  const { balance, nickname, type } = apiText;
  return (
    <Card>
    <Text>Account:</Text>
      <CardSection>
        <View>
          <Text>Account Holder:</Text>
          <Text>{nickname}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text>Account Type:</Text>
          <Text>{type}</Text>
        </View>
      </CardSection>
      <CardSection>
          <View>
          <Text>Balance</Text>
          <Text>${balance}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

export default MainScreenDetail;
