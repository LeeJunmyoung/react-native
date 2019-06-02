import React, { Component } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Weather from "./weather";

export default class App extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position =>{
        this.setState({
          isLoaded:true
        });
      },
      error =>{
        console.log(error);
      }
    )
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        { isLoaded ? <Weather /> : 
                          <View style={styles.loading}>
                            <Text style={styles.loadingText}>Getting the weather... wait Plese</Text>
                          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    padding: 25,

  },
  loadingText: {
    fontSize: 30,
    marginBottom: 50,

  }
});
