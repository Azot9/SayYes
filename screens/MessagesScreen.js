import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";

import {width, height} from "../constants"

import Header from "../components/Header";
import MessagesProfile from "../components/MessageProfile";

export default class MessagesScreen extends Component{
	    render() {
            const tempArray = [
            <MessagesProfile navi={this.props.navigation.navigate} key={1}/>, 
            <MessagesProfile navi={this.props.navigation.navigate} key={2}/>, 
            <MessagesProfile navi={this.props.navigation.navigate} key={3}/>];
        return (
            <View>
            <Header navi={this.props.navigation.navigate}/>
            <ScrollView>
                <View style={styles.mainField}>
                    {tempArray}
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainField: {
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        height: height
  }

});