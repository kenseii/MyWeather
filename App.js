import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import {TabNavigator} from 'react-navigation';

import Home from './components/Search';

import About from './components/About';


const Tabs = TabNavigator({
    Search: {screen: Home},
    About: {screen: About}
},{
    tabBarPosition:'bottom',

    tabBarOptions:{
        showIcon:true,
        pressColor:"#ff5b6a",
        showLabel:false,

        style:{
            backgroundColor:"#a2273c",
            borderTopWidth:1,
            borderColor:"#a2224f"
        },
        indicatorStyle:{

            height:2,
            backgroundColor:"#ffffff"
        }

    }

})

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar hidden={true} />
            <Tabs/></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
