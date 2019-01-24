import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    TextInput,
    Image,
    KeyboardAvoidingView
} from "react-native";

import StartPageHeader from "../../components/StartPageHeader";

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <StartPageHeader/>
                <KeyboardAvoidingView style={styles.container}  behavior="padding" >
                
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.login} placeholder="Email"/>
                        <TextInput style={styles.password} placeholder="Password"/>
                    </View>

                
                    <View style={styles.buttoms}>
                        <Button title="Forgot password?"
                        onPress={() => this.props.navigation.navigate('Profile')} />
                        <View style={styles.loginButton}>
                            <Button  title="Log In" 
                            color="#fff"
                            onPress={() => this.props.navigation.navigate('Profile')}></Button>
                        </View>

                    </View>  
                        <View style={styles.registrButton}>
                            <Button title="Registration" 
                            onPress={() => this.props.navigation.navigate('Profile')}/>
                        </View>  
                        <View style={{ height: 60 }} />
                </KeyboardAvoidingView>
            </View>
        );
    }

    getMenu() {
    if (!this.state.isMenuOpen) {
      return (
        <Text>This will be menu</Text>
      )
    }
  }
}
export default LoginScreen;

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#1f1f1f',
        paddingTop: 50,
        alignItems: 'center',
        height
    },
    inputContainer: {
        justifyContent: 'space-between',
        height: 105,
        paddingBottom: 10
    },
    login: {
        height: 40,
        width: width - 100,
        backgroundColor: '#fff',
        position: 'relative',
        borderRadius: 3,
        paddingLeft: 5
    },
    password: {
        height: 40,
        width: width - 100,
        backgroundColor: '#fff',
        borderRadius: 3,
        paddingLeft: 5
    },
    loginButton: {
        backgroundColor: '#850000',
        height: 35,
        width: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    buttoms: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90
    },
    registrButton: {
        position: 'absolute',
        bottom: 120 
    }
});