import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import MainScreenDetail from './MainScreenDetail';

class MainScreen extends Component {
  state = { apiText: [] }
  componentWillMount() {
    axios.get('http://api.reimaginebanking.com/customers/5a87a87c5eaa612c093b0f1e/accounts?key=6fbd1fec8587a95c4a307cc0283da47e')
      .then(response => this.setState({ apiText: response.data }));
  }

  renderAPIText() {
      return (
        this.state.apiText.map(apiText => <MainScreenDetail key={apiText.id} apiText={apiText} />)
      );
  }

    render() {
      console.log(this.state);
      return (
        <View>
          {this.renderAPIText()}
        </View>
      );
    }
}
export default MainScreen;
