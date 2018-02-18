import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


class MyAccount extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        {/*<Header headerText="My Account" />*/}
        <View style={styles.List}>
          <View style={styles.ListItemBright}>
            <TouchableOpacity onPress={() => Actions.organizations()}>
              <Text style={styles.ListItemText}>Add New Organization</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItem}>
            <TouchableOpacity onPress={() => Actions.info()}>
              <Text style={styles.ListItemText}>User Info</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItem}>
            <TouchableOpacity onPress={() => Actions.organizations()}>
              <Text style={styles.ListItemText}>My Charitable Organizations</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItem}>
            <TouchableOpacity onPress={() => Actions.setLimit()}>
              <Text style={styles.ListItemText}>Set Limit</Text>
            </TouchableOpacity>
          </View>

        </View>
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
      backgroundColor: 'rgba(230, 145, 83, .8)'
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
      backgroundColor: 'rgba(230, 145, 83, 1)'
    },

    MainContainer:
      {

      flex: 1,

// Set content's vertical alignment.
      justifyContent: 'center',

// Set content's horizontal alignment.
      alignItems: 'center',

// Set hex color code here.
      backgroundColor: 'rgba(245, 239, 232, 1)',

    }

  });
  
export { MyAccount };
