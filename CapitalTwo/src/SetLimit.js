import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Card, Input, CardSection, Button, WideButton} from './Components/common';

class SetLimit extends Component {
  state = { click: false, amount: '1000' }
  onbuttonPress() {
    this.setState({ click: true });
  }


  renderButton() {
    if (this.state.click) {
      return (
        <Text style = {styles.Success}>Successfully updated!</Text>
      );
    }
}
  render() {
    return (
      <View style = {styles.MainContainer}>
        {/*<Header headerText="Set Limit" />*/}
        <Card>
          <CardSection>
            <Text style = {styles.Info}>If the amount of money on your account gets this limit all setted donations will not be executed</Text>
          </CardSection>
          <CardSection>
            <Text style = {styles.Info}>Current Limit: ${this.state.amount}</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Input
              placeholder="Amount"
              placeholderTextColor="#666666"
              label="New Limit:"
              onChangeText={(amount) => this.setState({ amount })}
            />
          </CardSection>
          {/*<CardSection>*/}
            <WideButton whenPressed={() => this.onbuttonPress()}>Set Your Limit</WideButton>
          {/*</CardSection>*/}
          {/*<CardSection>*/}

          {/*</CardSection>*/}
        </Card>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    List: {
      borderBottomWidth: 1,
      // padding: 5,
      backgroundColor: '#fff',
      // justifyContent: 'flex-start',
      // flexDirection: 'column',
      borderColor: '#ddd',
      position: 'relative',
      width: 320
    },

    ListItem: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      width: null,
      // elevation: 1,
      // marginLeft: 5,
      padding: 10,
      // marginTop: 10,
      // marginRight: 5
      backgroundColor: "rgba(230, 145, 83, .8)"
    },

    ListItemText: {
      fontSize: 22,
      fontWeight: '300',
      paddingTop: 12,
      paddingBottom: 10,
      paddingLeft: 10,
      color: 'white'
      // color: 'rgba(245, 239, 232, 1)'
    },

    Info: {
      fontSize: 18,
      padding: 7
    },

    Success: {
      color: "#2da54a",
      fontSize: 22,
      alignItems: 'center',
      paddingTop: 15,
      paddingLeft: 20
    },

    ListItemBright: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      width: null,
      // elevation: 1,
      // marginLeft: 5,
      padding: 10,
      // marginTop: 10,
      // marginRight: 5
      backgroundColor: "rgba(230, 145, 83, 1)"
    },

    Input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
    },

    MainContainer:
      {

      flex: 1,

// Set content's vertical alignment.
      justifyContent: 'center',

// Set content's horizontal alignment.
//       alignItems: 'center',

// Set hex color code here.
      backgroundColor: 'rgba(245, 239, 232, 1)',

    }

  });

export { SetLimit };
