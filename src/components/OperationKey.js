import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class OperationKey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the OperationKey component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
})
