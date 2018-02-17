import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Info from './Info';
import Test from './Test';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
        key="info"
        component={Info}
        title="Info"
        initial
        />
        <Scene
          key="test"
          component={Test}
          title="Test"
        />
      </Scene>
    </Router>
  );
};

export default App;
