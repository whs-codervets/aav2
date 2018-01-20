// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#D6DBDF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  }
};

// Make the component available to other parts of the app
export default Header;
