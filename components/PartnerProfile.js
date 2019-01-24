import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from "react-native";

import {width, height} from "../constants"
import {getPhoto} from "../imager";

export default class PartnerProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      visibleStatus: true,
      like: false,
      dislike: false
    }
  }
	    render() {
        console.log(this.props.navi);
        let photoPath = '../assets/' + String(this.props.profileInfo.photo);
        return (
          <View>
            {this.state.visibleStatus ? this.profileContent() : <View/>}
          </View>
          )
    }
   profileContent = () => {
      return (

            <View style={styles.container}>
                <View style={styles.partnerProfile}>
                <View style={styles.partnerPhotoContainer}>
                  <Image style={styles.partnerPhoto}  source={getPhoto(this.props.profileInfo.name)} />
                </View>
                    <View style={styles.bottomPanel}>
                        <Text style={styles.textStyle}> {this.props.profileInfo.name}, {this.props.profileInfo.age} </Text>
                        <View style={styles.likesField}>
                             <TouchableHighlight style={styles.press}  onPress={() => this.setLike()}>
                                <Image style={styles.image}  source={require('../assets/heart.png')} />
                             </TouchableHighlight>
                             <TouchableHighlight style={styles.press}  onPress={() => this.setDislike()}>
                                <Image style={styles.image}  source={require('../assets/antiheart.png')} />
                             </TouchableHighlight>
                             <TouchableHighlight style={styles.press}  onPress={() => this.props.navi("Messenger")}>
                                <Image style={styles.image}  source={require('../assets/message.png')} />
                             </TouchableHighlight>
                        </View>
                    </View>   
                </View>
            </View>
        );
    }
  setLike() {
    this.setState({
      like: true,
      visibleStatus: false
    });
    
  }
  setDislike() {
    this.setState({
      dislike: true,
      visibleStatus: false
    });

  }
}



const styles = StyleSheet.create({
  partnerProfile: {
        backgroundColor: '#ffd8d8',
        borderRadius: 7,
        height: height/2.6,
        width: width*0.9,
        justifyContent: "space-between"
  },
  partnerPhotoContainer: {
    alignItems: "center",
    flex: 1
  },
  partnerPhoto: {
        borderRadius: 7,
        height: height/2.6,
        width: width*0.9,
  },
  bottomPanel: {
    position: 'relative',
    backgroundColor: "#ffd8d8",
    height: height* 0.06,
    borderTopWidth: 0,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    shadowOffset:{  width: 0,  height: -4  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3
  },
  textStyle: {
      fontSize: 24,
      fontFamily: 'AvenirNext-DemiBold'
  },
  likesField: {
    width: width * 0.4,
    borderBottomRightRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between"

  },
      image: {
        height: 35,
        width: 35
    },
    container: {
       height: height/2.3,
       alignItems: 'center',
       paddingTop: 30
    }
});

