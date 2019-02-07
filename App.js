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

        <View style={styles.calculatonDisplay}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>
        <View style={styles.resultDisplay}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.keyPad}>
          <View style={styles.digitKeys}>
            <View style={styles.btnRow}>
              <Key title={'0'} />
              <Key title={'.'} />
              <Key title={'1'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'2'} />
              <Key title={'3'} />
              <Key title={'4'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'5'} />
              <Key title={'6'} />
              <Key title={'7'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'8'} />
              <Key title={'9'} />
              <Key title={'9'} />
            </View>
          </View>
          <View style={styles.operationKeys}>
            <Key title={'DEL'} />
            <Key title={'/'} />
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
  calculatonDisplay: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  resultDisplay: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#b5cbff',
    flex: 1,
  },
  calculationText: {
    fontSize: 30,
    color: '#000000',
  },
  resultText: {
    fontSize: 24,
    color: '#ffffff',
  },
  keyPad: {
    backgroundColor: '#9ee0a5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    flex: 7,
  },
  btnRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  digitKeys: {
    flex: 3,
    backgroundColor: '#ed8c8c',
  },
  operationKeys: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#8e74db',
  },
})
