import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
<<<<<<< HEAD
import { Header, Card, Button, CardSection } from './Components/common';
import MoneyDonated from './MoneyDonated';
=======
import { Header, Card, CardSection, Text } from './Components/common';
import MoneyDonated from './Components/MoneyDonated';
import { WideButton } from './Components/common/WideButton';
>>>>>>> a396365a5962901c5351dda24dd0a5cabe626359

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
