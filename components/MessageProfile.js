import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";

import {width, height} from "../constants"

import Header from "../components/Header";

export default class MessagesScreen extends Component{
    constructor(props){
      super(props);
    }

	    render() {
        return (
            <View>
             <TouchableHighlight style={styles.buttonContainerStyle}  onPress={() => this.props.navi("Messenger")}>
			 	         <View style={styles.messagePerson}>
                    <Image style={styles.image}  source={require('../assets/profile.png')} />
                    <Text style={styles.text}> Name </Text>
                </View>
             </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

  messagePerson: {
    backgroundColor: '#ffd8d8',
    height: height * 0.12,
    width: width,
    paddingTop: 17,
    paddingLeft: 15,
    flexDirection: "row"
  },
  image: {
    width: 40,
    height: 40
  },
  text: {
    marginLeft: 0,
    fontSize: 24,
    fontFamily: 'AvenirNext-DemiBold',
    color: "white",
    paddingLeft: 20,
    marginTop: 7
  }

});