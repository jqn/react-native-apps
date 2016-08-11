/**
 * React Native Layout System
 * http://moduscreate.com/react-native-layout-system/
 * @Crysfel Villa
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class header extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>
          Add
        </Text>
        <Text style={styles.toolbarTitle}>
          Title
        </Text>
        <Text style={styles.toolbarButton}>
          RightButton
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  toolbarTitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('header', () => header);
