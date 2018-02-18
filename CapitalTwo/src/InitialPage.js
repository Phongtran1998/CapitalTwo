import React, { Component } from 'react';
import {StyleSheet, ImageBackground, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
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
          <Text style={styles.Title}>CharitalOne</Text>
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

  Title: {
    fontSize: 46,
    fontWeight: '500',
    paddingTop: 60,
    textAlign: 'center',
    color: 'rgba(230, 145, 83, 1)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});

export { InitialPage };
