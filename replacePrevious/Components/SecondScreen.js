import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import FirstScreen from './FirstScreen';

export default class SecondScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
      	<Text style={styles.helloText}>
		      Select a greeting
        </Text>
				<TouchableOpacity
      		style={styles.changeButton} onPress={() => this.sayHello("World!")}>
          	<Text>...World!</Text>
        </TouchableOpacity>
      	<TouchableOpacity
      		style={styles.changeButton} onPress={() => this.sayHello("my Friend!")}>
          	<Text>...my Friend!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  sayHello(greeting) {
		console.log("world button pressed");
    this.props.navigator.replacePreviousAndPop({
    	title: "First Screen",
      component: FirstScreen,
      passProps: {text: greeting}
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
