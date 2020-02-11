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
  },
  message: {
    fontSize: 16,
  }
})

export default Empty