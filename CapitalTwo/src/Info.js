import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Header } from './Components/common';
import MainScreen from './Components/MainScreen';
import MoneyDonated from './MoneyDonated';


class Info extends Component {
  render() {
    return (
      <View style = {styles.MainContainer}>
        {/*<Header headerText="Info" />*/}
        <MainScreen />
        <MoneyDonated />
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

    ItemText: {
      fontSize: 22,
      // fontWeight: '300',
      paddingTop: 12,
      paddingBottom: 10,
      paddingLeft: 10,
      // color: 'white'
      // color: 'rgba(245, 239, 232, 1)'
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

    MainContainer:
      {

      flex: 1,

// Set content's vertical alignment.
//       justifyContent: 'center',

// Set content's horizontal alignment.
//       alignItems: 'center',

// Set hex color code here.
      backgroundColor: 'rgba(245, 239, 232, 1)',

    }

  });

export { Info };
