import React from 'react';
import { Text, View } from 'react-native';

const MoneyDonated = () => {
  return (
    <View>
      <Text style={styles.titleLittleText}>You donated</Text>
      <Text style={styles.titleText}>$8,432</Text>
    </View>
  );
};

const styles = {
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },

  titleLittleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
  }
};

export default MoneyDonated;
