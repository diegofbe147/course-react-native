import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback} from 'react-native'

function Category(props){
  return(
    <ImageBackground
      source={{ uri: props.background_image }}
      style={styles.wrapper}
    >
      <Text style={styles.text}> {props.genres[0]} </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5
  }
})

export default Category