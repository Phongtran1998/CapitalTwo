import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import MoneyDonatedDetail from './MoneyDonatedDetail';


class MoneyDonated extends React.Component {
  state = { apiText: [] }
  componentWillMount() {
    axios.get('http://api.reimaginebanking.com/accounts/5a87a87f5eaa612c093b0f21/withdrawals?key=6fbd1fec8587a95c4a307cc0283da47e')
      .then(response => this.setState({ apiText: response.data }));
  }
  renderAPIText() {
      return (
        this.state.apiText.map(apiText => <MoneyDonatedDetail key={apiText.id} apiText={apiText} />)
      );
  }

  render() {
    return (
      <View style={{paddingLeft: 10}}>
        {this.renderAPIText()}
      </View>
    );
  }
}
export default MoneyDonated;
