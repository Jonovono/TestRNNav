/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { createStackNavigator } from 'react-navigation';


class Home extends Component {
  onPress = () => {
    console.log('pressed')
    this.props.navigation.navigate('Modal')
  }
  render() {
    return (
      <View style={{backgroundColor: 'green', flex: 1}}>
        <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'blue'}} onPress={this.onPress}>
          </TouchableOpacity>
      </View>
    )
  }
}


class Modal extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}} />
    )
  }
}

const RootStack = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: ({navigation}) => ({
        gesturesEnabled: false
    })
},
  Modal: Modal
}, {
  initialRouteName: 'Home',
  mode: 'modal',
  headerMode: 'none'
})

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
