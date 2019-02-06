import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class DigitKey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#b4b4b4',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2e5b4',
  },
})
