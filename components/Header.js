import React, { Component } from "react";
import { View, 
         Text, 
         StyleSheet, 
         Image, 
         AppRegistry, 
         TouchableHighlight,
         createDrawerNavigator } from "react-native";

         

 class Header extends Component {
    constructor(props){
      super(props);
    }

  render() {
    console.log(this.props.navi);
    return (
      <View style={styles.container}>
          <TouchableHighlight style={styles.press}  onPress={() => this.props.navi("Menu")}>
           <Image style={styles.image}  source={require('../assets/Hamburger_icon.svg.png')} />
         </TouchableHighlight>
      <Text style={styles.TextStyle}>Say Yes</Text>
      </View>
    );
  }
}

export default Header;


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
  },
    image: {
        height: 40,
        width: 40
    },
    press: {
        position: 'absolute',
        left: 10,
        top: 25
    }
});