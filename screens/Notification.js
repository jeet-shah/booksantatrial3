import React,{Component} from 'react';
import { Text,View,TouchableOpacity,StyleSheet,TextInput,Alert, } from 'react-native';
import { Card } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class Notification extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Hello </Text>
            </View>
        )
    }
}