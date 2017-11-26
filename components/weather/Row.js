import React from 'react'
import {View,Text,Image} from 'react-native'
import PropTypes from 'prop-types';

export default class Row extends React.Component{

    static propTypes = {
        day: PropTypes.PropTypes.object,
        index: PropTypes.PropTypes.number

    }

    render(){
        return(
            <View>
                <Text>{this.props.day.temp.day} °C</Text>
            </View>
        )
    }

}