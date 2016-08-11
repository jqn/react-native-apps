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
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row', // Step01
  },
  toolbarButton: {
    width: 50, // Step02
    color: '#FFF',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1, // Step 03
  },
});

AppRegistry.registerComponent('header', () => header);

// 1. Change the flex direction to the parent. In this case, the row direction will display the children horizontally.

// 2. Set the width of the buttons. This step is not necessary, but if we don’t set a fixed width, then the default width of the text will be used.

// 3. Set the title to flexible. This means that this container will use all the available space. This is really neat when changing from portrait to landscape because the toolbar will expand horizontally based on the available space.
