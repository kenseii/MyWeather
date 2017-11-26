import React from 'react'
import style from '../Style'
import {TextInput,StyleSheet,View,Text, Image,Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
import List from './List'

class Search extends React.Component{

    static navigationOptions = {
        title:'Search for a city',
        tabBarIcon:()=>{
            return <Image source={require('./icons/home.png')} style={{width:20,height:20}}/>
        }
    }

    constructor(props){

      super(props)
        this.state = {
          city: 'Kigali'
        }
    }

    setCity(city){
        this.setState({
            city:city
        })
    }

    submit(){
        //console.log("Submitted")
        this.props.navigation.navigate('Result',{city:this.state.city})
    }

    render(){

        return(
            <View style={style.container}>

        <TextInput
            underlineColorAndroid='transparent'
            style={style.input}
            value={this.state.city}
            onChangeText={(text) => this.setCity(text)}


        />
                <Button color={style.color} onPress={()=> this.submit()} title="Search a city"/></View>

    )
    }


}


const navigationOptions={
    headerStyle:style.header,
    headerTitleStyle:style.headerTitle

}
export default StackNavigator({
    Search:{
        screen:Search,
        navigationOptions
    },
    Result:{
        screen:List,
        navigationOptions
    }
})
