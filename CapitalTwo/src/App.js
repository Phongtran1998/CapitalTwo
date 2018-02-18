import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import { Info, InitialPage, MyAccount, Organizations, SetLimit } from './';
import { Info } from './Info';
import { InitialPage } from './InitialPage';
import { MyAccount } from './MyAccount';
import { Organizations } from './Organizations';
import { SetLimit } from './SetLimit';


const App = () => {
  return (
    <Router showNavigationBar={false}>
      <Scene key="root">
        <Scene
        key="initial"
        component={InitialPage}
        hideNavBar={true}
        initial
        />
        <Scene
          key="myaccount"
          component={MyAccount}
        />
        <Scene
          key="info"
          component={Info}
          title="My Account"
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
