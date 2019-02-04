import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class FunctionKey extends Component {
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
  },
})
