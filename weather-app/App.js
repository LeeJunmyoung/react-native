import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';

export default class App extends React.Component {
  state = { animating: true }
   
  closeActivityIndicator = () => setTimeout(() => this.setState({
  animating: false }), 60000)
  render() {
    const animating = this.state.animating
    return (
      <View style={styles.container}>
        <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
 
        <Text>Hello! I'm a Native Developer Now!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

 },
});
