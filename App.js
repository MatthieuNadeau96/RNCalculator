import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import DigitKey from './src/components/DigitKey'
import InputKey from './src/components/InputKey'
import OperationKey from './src/components/OperationKey'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DigitKey />
        <InputKey />
        <OperationKey />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
