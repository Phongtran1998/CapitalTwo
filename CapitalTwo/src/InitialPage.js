import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Card, CardSection, Text } from './Components/common';
import MoneyDonated from './Components/MoneyDonated';
import { WideButton } from './Components/common/WideButton';

class InitialPage extends Component {
  render() {
    return (
        <ImageBackground
        source={require('../static/images/background.jpg')}
        style={styles.backgroundImage}
        >

        {/*<Header headerText="CharitalOne" />*/}
        {/*<Card>*/}
          {/*<CardSection>*/}
            <WideButton
              whenPressed={() => Actions.myaccount()}
            >
              My Account
            </WideButton>
          <MoneyDonated />

          {/*</CardSection>*/}
        {/*</Card>*/}
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});

export { InitialPage };
