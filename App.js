import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import DigitKey from './src/components/DigitKey'
import FunctionKey from './src/components/FunctionKey'
import OperationKey from './src/components/OperationKey'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.functionKeys}>
          <FunctionKey title={'AC'} />
          <FunctionKey title={'+-'} />
          <FunctionKey title={'%'} />
        </View>
        <View style={styles.digitKeys}>
          <DigitKey title={'0'} />
          <DigitKey title={'.'} />
          <DigitKey title={'1'} />
          <DigitKey title={'2'} />
          <DigitKey title={'3'} />
          <DigitKey title={'4'} />
          <DigitKey title={'5'} />
          <DigitKey title={'6'} />
          <DigitKey title={'7'} />
          <DigitKey title={'8'} />
          <DigitKey title={'9'} />
        </View>
        <View style={styles.operationKeys}>
          <OperationKey title={'/'} />
          <OperationKey title={'*'} />
          <OperationKey title={'x'} />
          <OperationKey title={'-'} />
          <OperationKey title={'+'} />
          <OperationKey title={'='} />
        </View>
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
  functionKeys: {

  },
  digitKeys: {

  },
  operationKeys: {

  },
})
