import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'


function PlayPause(props){
  return(
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor = 'red'
    >
      {
        props.pause ?
        <Text style={styles.button}>PLAY</Text>
        :
        <Text style={styles.button}>PAUSE</Text>
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray'
  },
  button:{
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export default PlayPause