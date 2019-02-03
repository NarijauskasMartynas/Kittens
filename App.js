import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import KittensApp from './src/components//KittensApp';
import store from './src/store/index.js';
import { Provider } from 'react-redux';

import configureStore from './src/store/index.js';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <KittensApp />
      </Provider>
    );
  }
}

