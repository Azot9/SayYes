import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    KeyboardAvoidingView 
} from "react-native";

import Header from "../components/Header";
import PartnerProfile from "../components/PartnerProfile";
import {width, height} from "../constants"


export default class MessengerScreen extends Component{
	    render() {
        return (

             <KeyboardAvoidingView behavior='position' >
                <Header navi={this.props.navigation.navigate}/>
                    <View style={styles.mainField}>
                        <TextInput style={styles.messageInput} placeholder="Write your message"/>
                    </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
  mainField: {
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        height: height - 80,
        justifyContent: "flex-end",
  },
  messageInput: {
        height: 35,
        width: width,
        backgroundColor: '#fff',
        paddingLeft: 5 
  }

});


