import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Empty(props) {
  return (
    <View style={styles.containerEmpty}>
      <Text style={styles.message}>{props.text}</Text>
    </View>
  )
}

styles = StyleSheet.create({
  containerEmpty: {
    paddingVertical: '50%',
    backgroundColor: 'red',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  }
})

export default Empty