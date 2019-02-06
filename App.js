import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Key from './src/components/Key'

export default class App extends Component {

  state = {
    displayValue: '0',
  }

  render() {
    const { displayValue } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.keyPad}>
          <View style={styles.functionKeys}>
            <Key title={'AC'} />
            <Key title={'+-'} />
            <Key title={'%'} />
          </View>
          <View style={styles.digitKeys}>
            <Key title={'0'} />
            <Key title={'.'} />
            <Key title={'1'} />
            <Key title={'2'} />
            <Key title={'3'} />
            <Key title={'4'} />
            <Key title={'5'} />
            <Key title={'6'} />
            <Key title={'7'} />
            <Key title={'8'} />
            <Key title={'9'} />
          </View>
          <View style={styles.operationKeys}>
            <Key title={'/'} />
            <Key title={'*'} />
            <Key title={'x'} />
            <Key title={'-'} />
            <Key title={'+'} />
            <Key title={'='} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    height: '25%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#b5cbff',
  },
  displayText: {
    padding: 10,
    fontSize: 100,
    color: '#ffffff',
  },
  keyPad: {
  },
  functionKeys: {
    flexDirection: 'row',
  },
  digitKeys: {
    flexDirection: 'row',
  },
  operationKeys: {
    flexDirection: 'column',
  },
})
