import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Key from './src/components/Key'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class App extends Component {

  state = {
    displayValue: '0',
  }

  render() {
    const { displayValue } = this.state
    const backspace = (<FontAwesome5 name={'backspace'} size={25} />)
    const divide = (<FontAwesome5 name={'divide'} size={25} />)
    const times = (<FontAwesome5 name={'times'} size={25} />)
    const plus = (<FontAwesome5 name={'plus'} size={25} />)
    const minus = (<FontAwesome5 name={'minus'} size={25} />)
    const equals = (<FontAwesome5 name={'equals'} size={25} />)
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
              <Key title={'7'} />
              <Key title={'8'} />
              <Key title={'9'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'4'} />
              <Key title={'5'} />
              <Key title={'6'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'1'} />
              <Key title={'2'} />
              <Key title={'3'} />
            </View>
            <View style={styles.btnRow}>
              <Key title={'0'} />
              <Key title={'.'} />
              <Key title={'='} />
            </View>
          </View>
          <View style={styles.operationKeys}>
            <Key title={backspace} />
            <Key title={divide} />
            <Key title={times} />
            <Key title={minus} />
            <Key title={plus} />
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
