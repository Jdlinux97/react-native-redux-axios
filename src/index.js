import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import App from './components/App';
import store from './store';

export default Expo.registerRootComponent(
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }
);
