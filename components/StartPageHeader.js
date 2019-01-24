import React, { Component } from "react";
import { View, 
         Text, 
         StyleSheet, 
         Image, 
         AppRegistry, 
         TouchableHighlight,
         createDrawerNavigator } from "react-native";


 class StartPageHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true
    };
  }

  render() {
    let isOpen = this.props.isOpen;

    return (
      <View style={styles.container}>
      <Text style={styles.TextStyle}>Say Yes</Text>
      </View>
    );
  }
}

export default StartPageHeader;


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#850000',
      height: 80,
      justifyContent: 'center',
      paddingTop: 10,
      alignItems: 'center',
      position: 'relative'
  },
  TextStyle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'AvenirNext-DemiBold'
  }
});