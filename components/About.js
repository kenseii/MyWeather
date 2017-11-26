import React from 'react'

import style from '../Style'
import {View,Text, ActivityIndicator,Image,Button} from 'react-native'

export default class About extends React.Component{

    static navigationOptions = {
        tabBarIcon:()=>{
           return <Image source={require('./icons/user.png')} style={{width:20,height:20}}/>
        }
    }

    search(){
        this.props.navigation.navigate('Search')
    }


    render(){

        return(
            <View style={style.container}>

                <Text style={style.title}>About the application</Text>
                <Text>Bla bla bla</Text>

                <Button color={style.color} onPress={()=> this.search()} title="Search"/>
            </View>


        )
    }

}
