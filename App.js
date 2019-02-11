import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'

import Key from './src/components/Key'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class App extends Component {

  state = {
    displayValue: '0',
  }

  buttonPressed(text) {
    alert(text)
  }

  render() {
    const { displayValue } = this.state
    const backspace = (<FontAwesome5 name={'backspace'} size={20} />)
    const divide = (<FontAwesome5 name={'divide'} size={20} />)
    const times = (<FontAwesome5 name={'times'} size={20} />)
    const plus = (<FontAwesome5 name={'plus'} size={20} />)
    const minus = (<FontAwesome5 name={'minus'} size={20} />)
    const equals = (<FontAwesome5 name={'equals'} size={20} />)

    let rows = []
    let nums = [[7,8,9], [4,5,6],[1,2,3],[0,'.','=']]
    for(let i = 0; i < 4; i++) {
      let row = []
      for(let j = 0; j < 3; j++) {
        row.push(
          <TouchableNativeFeedback onPress={() => this.buttonPressed(nums[i][j])} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{nums[i][j]}</Text>
            </View>
          </TouchableNativeFeedback >
        )
      }
      rows.push(<View style={styles.btnRow}>{row}</View>)
    }

    let operations = ['DEL', '/', '*', '-', '+']
    let operationKeys = []
    for(let i = 0; i < operations.length; i++) {
      operationKeys.push(
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{operations[i]}</Text>
          </View>
        </TouchableNativeFeedback >
      )
    }

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
            {rows}
          </View>
          <View style={styles.operationKeys}>
            {operationKeys}
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
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff',
  },
  operationKeys: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#8e74db',
  },
})
