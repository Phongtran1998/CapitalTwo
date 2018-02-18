import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Info from './Info';
import InitialPage from './InitialPage';

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
          key="info"
          component={Info}
        />
      </Scene>
    </Router>
  );
};

export default App;
