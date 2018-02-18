import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Info, InitialPage, MyAccount, Organizations, SetLimit } from './';


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
        key="initial"
        component={InitialPage}
        initial
        />
        <Scene
          key="myAccount"
          component={MyAccount}
        />
        <Scene
          key="info"
          component={Info}
        />
        <Scene
          key="organizations"
          component={Organizations}
        />
        <Scene
          key="setLimit"
          component={SetLimit}
        />
      </Scene>
    </Router>
  );
};

export default App;
