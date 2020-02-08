import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Empty(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.text}</Text>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    paddingVertical: '50%',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  }
})

export default Empty