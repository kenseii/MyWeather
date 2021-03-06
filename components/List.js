import React from 'react'

import {Text, ActivityIndicator,ListView,Image,View,ToastAndroid, Alert} from 'react-native'

import {StackNavigator, NavigationActions} from 'react-navigation'

import axios from 'axios'

import style from '../Style'


import WeatherRow from './weather/Row'
import Search from "./Search";

export default class List extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return {
            title: `Weather/ ${navigation.state.params.city}`,
            tabBarIcon:()=>{
                return <Image source={require('./icons/home.png')} style={{width:20,height:20}}/>
            }
        }

    }




    constructor (props){

        super(props)
        console.log('state', this.props.navigation.state)
        this.state ={
            city:this.props.navigation.state.params.city,
            report:null

        }

        this.fetchWeather = this.fetchWeather.bind(this);

    }

    componentWillMount(){
        setTimeout(()=>{
            this.fetchWeather()


        }, 1000)
    }

    fetchWeather(){

        let that = this;
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=94c6cf0868fa5cb930a5e2d71baf0dbf`)
            .then((response)=>{
                this.setState({report: response.data})

            })
            .catch(function (error) {
                console.log(error);
                // console.log(this);
                // return promise.reject(error);
                return Alert.alert(
                    'Error getting weather data',
                    'Please try again later',
                    [
                        {text: 'OK', onPress: () => that.props.navigation.goBack()},
                    ],
                )




    })}



    render(){

        if (this.state.report === null){
            return(
                <ActivityIndicator style={style.activityIndicatorViewStyle} color={style.color} size="large"/>
            )




        }
        else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return(
                <ListView dataSource={ds.cloneWithRows(this.state.report.list)}
                          renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)}/>} />
            )
        }

    }
}