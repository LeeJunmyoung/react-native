import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

// export default class Weather extends Component{
//     render(){
//         return(
//         <LinearGradient colors={["#00C6FB","#005BEA"]} style={styles.container}>
//             <View style={styles.upper}>
//                 <Ionicons color="white" name="ios-rainy" size={144}></Ionicons>
//                 <Text style={styles.temp}>38 °C</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a MF</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//         </LinearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain : {
        colors:['#00C6FB', '#005BEA'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside',
        icon: 'ios-rainy'
    },
    Clear :{
        colors:['#00C6FB', '#005BEA'],
        title: 'Sunny so hot',
        subtitle: 'For more info look outside',
        icon: 'ios-sunny'
    },
    Thunderstorm :{
        colors:['#00C6FB', '#005BEA'],
        title: 'Thunderstorm in the house',
        subtitle: 'For more info look outside',
        icon: 'ios-thunderstorm'
    }
}

function Weather({temp}){
    return(
        <LinearGradient colors={["#00C6FB","#005BEA"]} style={styles.container}>
                <Ionicons color="white" name="ios-rainy" size={144}></Ionicons>
                <View style={styles.upper}>
                    <Text style={styles.temp}>{temp} °C</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop : 10,
        fontWeight: "300"
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom : 10,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom : 24
    }
})