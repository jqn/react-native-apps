/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import FirstScreen from './Components/FirstScreen';
class replacePrevious extends Component {
  render() {
    return (
      <NavigatorIOS
	      style={styles.mainContainer}
        initialRoute={{
          component: FirstScreen,
          title: 'First Screen',
          passProps: { text: ' ...' },
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
		flex: 1,
    backgroundColor: "#eee"
  },
  container: {
  	flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  helloText: {
  	fontSize: 16,
  },
  changeButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 4,
    marginTop: 20
  }
});

AppRegistry.registerComponent('replacePrevious', () => replacePrevious);
