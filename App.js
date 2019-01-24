import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, 
        createAppContainer,
         } from 'react-navigation';

//import MyAccount from './screens';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import MessagesScreen from './screens/MessagesScreen';
import SettingsScreen from './screens/SettingsScreen';
import MessengerScreen from './screens/MessengerScreen';

/*
 class Home extends React.Component {
  render() {
    return (
      <AppSwitchNavigator/>
    );
  }
}
*/
const AppSwitchNavigator = createSwitchNavigator({
    Login: {
      screen: LoginScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Messages: {
      screen: MessagesScreen
    },
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Menu : {
      screen: MenuScreen
    },
    List: {
      screen: ListScreen
    },
    Messenger: {
      screen: MessengerScreen
    }


  });



const App = createAppContainer(AppSwitchNavigator);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
