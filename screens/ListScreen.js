import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView
} from "react-native";

import Header from "../components/Header";
import PartnerProfile from "../components/PartnerProfile";
import {width, height} from "../constants"

const url = "http://sayyes.dx.am/public/profiles.json";

export default class ListScreen extends Component{
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
        this.setState({data});
        console.log(this.state.data)

    }

	    render() {
            let profileList = this.state.data.map((profileInfo) => <PartnerProfile 
                                                                        navi={this.props.navigation.navigate} 
                                                                        profileInfo={profileInfo} 
                                                                        key={profileInfo.id}
                                                                    />);
        return (
            <View>
                <Header navi={this.props.navigation.navigate}/>
                <View style={styles.mainField}>
                    <ScrollView>
                        <View>
                            {profileList}
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainField: {
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 160
  }

});

