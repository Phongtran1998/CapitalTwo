import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class PickerPeriod extends Component {
   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user });
   }
   render() {
      return (
         <View>
            <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="Annually" value="annually" />
               <Picker.Item label="Monthly" value="monthly" />
               <Picker.Item label="Weekly" value="weekly" />
            </Picker>
         </View>
      );
   }
}
export { PickerPeriod };
