import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Info from './Info';
import InitialPage from './InitialPage';

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
          key="info"
          component={Info}
          title="My Account"
        />
      </Scene>
    </Router>
  );
};

export default App;
