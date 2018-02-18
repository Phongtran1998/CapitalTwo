import React from 'react';
import { Text, View } from 'react-native';

const MoneyDonatedDetail = ({ apiText }) => {
  const { amount, transaction_date } = apiText;
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight:'bold', paddingTop:10}}>{transaction_date}</Text>
       <Text style={{fontSize: 18}}>${amount}</Text>
    </View>
  );
};


export default MoneyDonatedDetail;
