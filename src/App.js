import React, { Component } from 'react';
import {
  //AppRegistry,
  Text,
  View
} from 'react-native';
import Header from './components/common/Header';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Arrive Alive'} />
        <Text>Hello Arrive Alive (V2) app</Text>
      </View>
    );
  }
}

