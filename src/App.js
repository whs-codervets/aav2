import React, { Component } from 'react';
import {
  //AppRegistry,
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Actions,
  ScrollView
} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import MainContainer from './components/common/MainContainer';
import ContainerSection from './components/common/ContainerSection';
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

// const TouchableNativeFeedback = require('TouchableNativeFeedback');
// const TouchableOpacity = require('TouchableOpacity');

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyDDZRgvFCWHEDxOHmcU4lg43UQbg4Z2yZw',
          authDomain: 'auth-b92e5.firebaseapp.com',
          databaseURL: 'https://auth-b92e5.firebaseio.com',
          projectId: 'auth-b92e5',
          storageBucket: 'auth-b92e5.appspot.com',
          messagingSenderId: '277068579330'
        });

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
          }
        });
      }

      renderContent() {
        switch (this.state.loggedIn) {
          case true:
            return (
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            );
          case false:
            return <LoginForm />;
          default:
            return <Spinner size="large" />;
        }
      }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header headerText={'Arrive Alive v2'} />
        <MainContainer>
            <ContainerSection>
              <TouchableHighlight onPress={() => navigate('this.self')}>
                  <Image source={{ uri: '/Users/yokoref/dev/aav2/src/components/assets/arrive-alive2.png' }} style={styles.mainImgStyle} />
              </TouchableHighlight>

            </ContainerSection>

            <ContainerSection>
              <Text>Hello this is Arrive Alive (V2), the app that may save your life.</Text>
            </ContainerSection>

            <ContainerSection>
              <Text />
            </ContainerSection>

            <ContainerSection>
                <Button onPress={() => Actions.pop().refresh()}>
                  Future Login/Register Button
                </Button>

            </ContainerSection>

            <ContainerSection>
              <Text />
            </ContainerSection>

            <ContainerSection>
                <Button onPress={() => Actions.pop().refresh()}>
                  Future Login/Register Button
                </Button>


            </ContainerSection>

        </MainContainer>


    </ScrollView>
    );
  }
}


// {
//   /* <Button
//               onPress={ }
//               title="Login/Register"
//               color="#841584" /> */ }

const styles = {
  mainImgStyle: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 15
  }

};
