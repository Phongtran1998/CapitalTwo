import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class PickerExample extends Component {
   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user });
   }
   render() {
      return (
         <View>
            <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="Red Cross" value="redcross" />
               <Picker.Item label="WTO" value="wto" />
               <Picker.Item label="Make a Wish" value="makeawish" />
            </Picker>
         </View>
      );
   }
}
export { PickerExample };
