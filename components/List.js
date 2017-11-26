import React from 'react'

import {Text} from 'react-native'

import {StackNavigator} from 'react-navigation'

export default class List extends React.Component{

    static navigationOptions ={
        title: 'Weather/'
    }

    render(){
        return(
            <Text>Hello world</Text>
        )
    }
}