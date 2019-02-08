import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'

export default class DigitKey extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  
})
