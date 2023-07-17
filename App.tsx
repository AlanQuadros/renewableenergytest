import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
