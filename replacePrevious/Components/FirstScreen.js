import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import SecondScreen from './SecondScreen';

export default class FirstScreen extends Component{
  constructor(props, context) {
    super(props, context);
      this._gotoSecondScreen = this._gotoSecondScreen.bind(this);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}>
		      Hello {this.props.text}
        </Text>
        <TouchableOpacity
      		style={styles.changeButton} onPress={this._gotoSecondScreen}>
          	<Text>Click to change</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _gotoSecondScreen() {
		console.log("button pressed");
    this.props.navigator.push({
    	title: "Second Screen",
      component: SecondScreen
    });
	}
};

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
