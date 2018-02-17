import React from 'react';
import { Text } from 'react-native';

const MoneyDonated = () => {
  return (
    <Text style={styles.titleText}>$8432</Text>
  );
};

  const styles = {
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 250,
  }
};

export default MoneyDonated;
