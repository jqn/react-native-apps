//https://medium.com/@dabit3/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.miuskqee9
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  WebView
} from 'react-native';

var URL = 'http://demo.motorcloud.com/search/';
var WEBVIEW_REF = 'webview';

class Two extends Component {
  state = {
  url: 'No Page Loaded',
  backButtonEnabled: false,
  forwardButtonEnabled: false,
  loading: true,
  scalesPageToFit: true,
}

    render(){
      return(
        <View style={ styles.mainContainer }>
        <View>
          <TouchableOpacity
          onPress={this.goBack}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this.goForward}
          sytle={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton} >
            <Text>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: URL }}
          ref={WEBVIEW_REF}
        />
        </View>
    );
  }
  goBack = () => {
    this.refs[WEBVIEW_REF].goBack();
  };
  goForward = () => {
    this.refs[WEBVIEW_REF].goForward();
  };
}

class Main extends Component {

  onPress() {
  	alert("YO FROM RIGHT BUTTON")
  }

  gotoNext() {
   this.props.navigator.push({
      component: Two,
      passProps: {
        id: 'MY ID',
      },
      onPress: this.onPress,
      goBack: this.goBack,
      rightText: 'ALERT!'
    })
  }

  goBack(){
    this.refs.goBack();
  };

  render() {
	  return(
      <View style={ styles.mainContainer }>
      	<TouchableHighlight style={ styles.button } onPress={ () => this.gotoNext() }>
    	    <Text style={ styles.buttonText }>Go to next page</Text>
    		</TouchableHighlight>
  		</View>
		)
	}
}

class reactNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNavbar: false
    };
  }

  toggleNavigation() {
    console.log('clicked');

    this.setState({
      hideNavbar: !this.state.hideNavbar
    });
  }
  renderScene(route, navigator) {
  	return <route.component {...route.passProps} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
      		style={{flex:1}}
          initialRoute={{name: 'Main', component: Main}}
          renderScene={ this.renderScene }
          navigationBar={
             <Navigator.NavigationBar
               style={ styles.nav }
               routeMapper={NavigationBarRouteMapper} />}
      />
		)
  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
        	 underlayColor="transparent"
           onPress={() => route.goBack() }>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
  	)}
  	else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return ( <TouchableHighlight
    														onPress={ () => route.this.goBack }>
                                <Text style={ styles.rightNavButtonText }>
                                  	{ route.rightText || 'Right Button' }
                                </Text>
                              </TouchableHighlight> )
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>MY APP TITLE</Text>
  }
};


const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  },
  mainContainer: {
  	flex: 1,
    flexDirection: 'column',
    marginTop:100
  },
  leftNavButtonText: {
  	fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
  	fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
  	height: 60,
    backgroundColor: '#efefef'
  },
  title: {
  	marginTop:4,
    fontSize:16
  },
  button: {
  	height:60,
    marginBottom:10,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
  	fontSize:18
  }
});

AppRegistry.registerComponent('reactNavigation', () => reactNavigation);
