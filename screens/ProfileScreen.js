import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    KeyboardAvoidingView,
    Image
} from "react-native";

import Header from "../components/Header";
import { height, width } from '../constants';
import {getPhoto} from "../imager";

const url = "http://sayyes.dx.am/public/myProfile.json";

export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {

        const response = await fetch(url);
                console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState(data);
        console.log(this.state.data)
    }

	    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
            <Header navi={this.props.navigation.navigate}/>
				<View style={styles.photoField}>
                    <View style={styles.photoCircle}>
                        <Image style={styles.myPhoto}  source={getPhoto(this.state.name)} />
                    </View>
                </View>
                
                    <View style={styles.information}>
                        <TextInput onChangeText={(text) => console.log(text)} 
                        style={styles.nameSurname} placeholder="Name" 
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                        <TextInput style={styles.age} placeholder="Age"
                        onChangeText={(age) => this.setState({age})}
                        value={this.state.age}/>
                        <TextInput style={styles.yourInfo} placeholder="Information about you"
                        onChangeText={(information) => this.setState({information})}
                        value={this.state.information}/>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  photoField: {
        backgroundColor: '#824747',
        alignItems: 'center',
        height: height * 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
  photoCircle: {
      height:  height * 0.4,
      width: height * 0.4,
      backgroundColor: '#ffd8d8',
      borderRadius: height * 0.2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    myPhoto: {
      height:  height * 0.4,
      width: height * 0.4,
      borderRadius: height * 0.2,
    },
    text: {
      color: "black",
      fontSize: 32,
      fontFamily: 'AvenirNext-DemiBold'
    },
    information: {
        backgroundColor: '#ffd8d8',
        width: width,
        height: height * 0.5 -80,
        paddingLeft: 20
    },
    nameSurname: {
        fontSize: 26,
        paddingTop: 10,
        fontFamily: 'AvenirNext-DemiBold'
    },
    age: {
        fontSize: 26,
        paddingTop: 5,
        fontFamily: 'AvenirNext-DemiBold'
    },
    yourInfo: {
        fontSize: 20,
        paddingTop: 10,
        fontFamily: 'AvenirNext-DemiBold'
    }

});