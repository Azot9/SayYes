import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
    Image,
    TextInput
} from "react-native";

import {width, height} from "../constants"

import Header from "../components/Header";

export default class SettingsScreen extends Component{
      constructor(props){
        super(props);
        this.state = {
            age: 18,
            male: "woman",
            interests: "",
            location: ""
        }
    }
        render() {
        return (
            <View>
                <Header navi={this.props.navigation.navigate}/>
                <View style={styles.mainField}>
                    <View style={styles.paramPanel}>
                        <Text style={styles.textStyle}> Male </Text>
                        <View style={styles.likesField}>
                             <TouchableHighlight style={styles.press}  onPress={() => console.log("you press it")}>
                                <Image style={styles.image}  source={require('../assets/profile.png')} />
                             </TouchableHighlight>
                             <TouchableHighlight style={styles.press}  onPress={() => console.log("you press it")}>
                                <Image style={styles.image}  source={require('../assets/woman.png')} />
                             </TouchableHighlight>
                        </View>
                    </View>  
                    <View style={styles.paramPanel}>
                        <Text style={styles.textStyle}> Age </Text>
                        <TextInput style={styles.textArea}
                        onChangeText={(age) => this.setState({age})}
                        value={this.state.information} />
                    </View>  
                    <View style={styles.paramPanel}>
                        <Text style={styles.textStyle}> Interests </Text>
                        <TextInput style={styles.textArea} 
                        onChangeText={(interests) => this.setState({interests})}
                        value={this.state.information}/>
                    </View>                      
                    <View style={styles.paramPanel}>
                        <Text style={styles.textStyle}> Location </Text>
                        <Image style={styles.image}  source={require('../assets/marker.png')} />
                        <TextInput style={styles.textArea} 
                        onChangeText={(location) => this.setState({location})}
                        value={this.state.location}/>
                    </View>  
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainField: {
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        height: height - 80
  },
  textStyle: {
      fontSize: 24,
      fontFamily: 'AvenirNext-DemiBold',
      color: "white",
      paddingLeft: 10
  },
  likesField: {
    width: width * 0.25,
    borderBottomRightRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
      image: {
        height: 35,
        width: 35
    },
  paramPanel: {
    width: width,
    position: 'relative',
    height: height* 0.08,
    shadowOffset:{  width: 0,  height: -4  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingRight: 10
  },
    textArea: {
        height: 35,
        width: width/2,
        backgroundColor: '#fff',
        borderRadius: 3,
        paddingLeft: 5
    }
});
