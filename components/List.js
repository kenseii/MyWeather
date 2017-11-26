import React from 'react'

import {Text, ActivityIndicator} from 'react-native'

import {StackNavigator} from 'react-navigation'

import axios from 'axios'

import style from '../Style'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return {
            title: `Weather/ ${navigation.state.params.city}`
        }
    }

    constructor (props){

        super(props)
        console.log('state', this.props.navigation.state)
        this.state ={
            city:this.props.navigation.state.params.city,
            report:null

        }
        this.fetchWeather()
    }

    fetchWeather(){

        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=94c6cf0868fa5cb930a5e2d71baf0dbf`)
            .then((response)=>{
                console.log(response.data)
            })


    }

    render(){
        if (this.state.report === null){
            return(
                <ActivityIndicator color={style.color} size="large"/>
            )
        }
        else{
            return(
                <Text>Hello world</Text>
            )
        }

    }
}