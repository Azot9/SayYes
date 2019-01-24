import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import Header from "../components/Header";

class HomeScreen extends Component {

    render() {
        //console.log("this.props.navigation.navigate('Menu')");
        return (
            <View>
            <Header navi={this.props.navigation.navigate}/>
            <View style={styles.container}>
            <Text> This is HomeScreen </Text>
            </View>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});