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
import Header from './components/common/Header';
import MainContainer from './components/common/MainContainer';
import ContainerSection from './components/common/ContainerSection';
import Button from './components/common/Button';


// const TouchableNativeFeedback = require('TouchableNativeFeedback');
// const TouchableOpacity = require('TouchableOpacity');

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header headerText={'Arrive Alive'} />
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
        </MainContainer>
      
        
    </ScrollView>
    );
  }
}


{/* <Button
              onPress={ }
              title="Login/Register"
              color="#841584" /> */}

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