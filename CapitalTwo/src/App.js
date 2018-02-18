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
          title="My Account"
        />
        <Scene
          key="info"
          component={Info}
          title="My Info"
        />
        <Scene
          key="organizations"
          component={Organizations}
          title="My Charitable Organizations"
        />
        <Scene
          key="setLimit"
          component={SetLimit}
          title="Set Limit"
        />
      </Scene>
    </Router>
  );
};

export default App;
