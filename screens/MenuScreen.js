import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, Button, TouchableHighlight } from "react-native";

import StartPageHeader from "../components/StartPageHeader"
import {width, height} from "../constants"

 class MenuScreen extends Component {

  render() {
    return (
      <View>
         <StartPageHeader/>
        <View style={styles.mainField}>
          <View style={styles.inputContainer}>

              <TouchableHighlight style={styles.buttonContainerStyle}  onPress={() => this.props.navigation.navigate('Profile')}>
               <Text style={styles.text}>Profile</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.buttonContainerStyle}  onPress={() => this.props.navigation.navigate('List')}>
               <Text style={styles.text}>List</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.buttonContainerStyle}  onPress={() => this.props.navigation.navigate('Messages')}>
               <Text style={styles.text}>Messages</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.buttonContainerStyle}  onPress={() => this.props.navigation.navigate('Settings')}>
               <Text style={styles.text}>Settings</Text>
              </TouchableHighlight>

           </View>
          </View>
      </View>
      );
  }
}

export default MenuScreen;

let w = Dimensions.get('window').width;
let h = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputContainer: {
        justifyContent: 'space-between',
        height: h * 0.6,

  },
  mainField: {
        backgroundColor: '#1f1f1f',
        paddingTop: 80,
        alignItems: 'center',
        height: h - 80
  },
  buttonContainerStyle: {
        backgroundColor: '#850000',
        height: 50,
        width: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
        
    },
    text: {
      color: "white",
      fontSize: 24,
      fontFamily: 'AvenirNext-DemiBold'
    }

});

