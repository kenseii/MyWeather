import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import globalStyle from '../../Style'
import moment from 'moment'
import FadeInView from '../animation/fadeInView'


export default class Row extends React.Component{

    static propTypes = {
        day: PropTypes.PropTypes.object,
        index: PropTypes.PropTypes.number

    }

    day(){

        let day = moment(this.props.day.dt * 1000).format('ddd')

        return(
            <Text style={[style.white,style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    icon(size=50){
        const type = this.props.day.weather[0].main.toLocaleLowerCase()
        let image

        switch(type){
            case 'clouds':
                image = require('./icons/cloudy.png')
                break;
            case 'rain':
                image = require('./icons/rain.png')
                break;
            default:
                image = require('./icons/sun.png')
        }
        return <Image source={image} style={{width:size, height:size}}/>
    }

    date(){

        let day = moment(this.props.day.dt * 1000).format('DD/MM')

        return(
            <Text style={{color:'#ececec'}}>{day}</Text>
        )
    }

    render(){

        if (this.props.index === 0){
            return(
                <FadeInView delay={this.props.index * 50}>
                <View style={[style.view, style.flex, style.firstView]}>
                    <View >

                    <Text>{this.day()} {this.date()}</Text>

                        {this.icon(90)}
                    </View>
                    <Text style={[style.temp, {fontSize:35}]}>{Math.round(this.props.day.temp.day)} °C</Text>
                </View></FadeInView>
            )

        }
        else{
            return(
                <FadeInView delay={this.props.index * 50}>
                <View style={[style.view, style.flex]}>
                    <View style={style.flex}>
                        {this.icon()}
                        <Text style={{marginLeft:10}}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.day.temp.day)} °C</Text>
                </View></FadeInView>
            )
        }

    }

}

const style = StyleSheet.create({
    white:{
        color:'#fff'
    },
    bold:{
      fontWeight:'bold'
    },

    flex:{
        flex:1,
        alignItems:'center',
        flexDirection:'row'

    },

    firstView:{
        backgroundColor:'#e54b65'

    },
    view:{
        backgroundColor:'#394168',
        borderWidth:0,
        borderColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor: '#e3e6e8',
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'space-between'

    },

    temp:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize:22
    }

})