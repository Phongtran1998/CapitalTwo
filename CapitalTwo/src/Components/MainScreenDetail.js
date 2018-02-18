import React from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, CardSection } from './common';
import MoneyDonated from '../MoneyDonated';

const MainScreenDetail = ({ apiText }) => {
  const { balance, nickname, type } = apiText;
  return (
    <Card>
    {/*<Text>Account:</Text>*/}
      <CardSection>
        <View>
          <Text style = {styles.Title}>Account Holder:</Text>
          <Text style = {styles.Value}>{nickname}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text style = {styles.Title}>Account Type:</Text>
          <Text style = {styles.Value}>{type}</Text>
        </View>
      </CardSection>
      <CardSection>
          <View>
          <Text style = {styles.Title}>Balance:</Text>
          <Text style = {styles.Value}>${balance}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text style = {styles.Title}>Recent Donations:</Text>
          <MoneyDonated />
        </View>

      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create(
  {

    Title: {
      fontSize: 20,
      fontWeight: '500',
      paddingTop: 12,
      paddingBottom: 10,
      paddingLeft: 10,
      // color: 'white'
      // color: 'rgba(245, 239, 232, 1)'
    },

    Value: {
      fontSize: 18,
      fontWeight: '300',
      paddingTop: 12,
      paddingBottom: 10,
      paddingLeft: 10,
      // color: 'white'
      // color: 'rgba(245, 239, 232, 1)'
    }

  });
export default MainScreenDetail;
