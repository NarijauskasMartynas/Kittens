import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import KittenList from './src/components/KittensListView/KittenList'
import KittenInfo from './src/components/KittenInfoView/KittenInfo'


export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home:{
    screen: KittenList
  },
  Profile:{
    screen: KittenInfo
  }
});

const Navigator = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
