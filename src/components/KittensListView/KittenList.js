import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class KittenList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Kitten List </Text>
        <Button title="go to profile"
        onPress ={() => this.props.navigation.navigate('Profile')}/>
      </View>
    )
  }

}

export default KittenList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});