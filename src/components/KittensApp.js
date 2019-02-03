import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import KittenList from './KittensListView/KittenList'
import KittenInfo from './KittenInfoView/KittenInfo'
import configureStore from '../store/index.js';
import { Provider } from 'react-redux';

export default class KittensApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: KittenList
    },
    Profile: {
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
