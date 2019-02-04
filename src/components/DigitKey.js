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
        <Text>I'm the DigitKey component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
})
