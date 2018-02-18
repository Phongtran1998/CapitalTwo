import React from 'react';
import { Text, View } from 'react-native';

const MoneyDonatedDetail = ({ apiText }) => {
  const { amount } = apiText
  return (
    <View>
       <Text>${amount}</Text>
    </View>
  );
};


export default MoneyDonatedDetail;
