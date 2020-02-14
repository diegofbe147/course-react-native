import React from 'react'
import { View, ProgressBarAndroid, StyleSheet } from 'react-native'

function ProgressBar(props) {
  return(
    <View style={styles.container}>
      <ProgressBarAndroid
        styleAttr='Horizontal'
        indeterminate={false}
        progress={props.progress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    marginRight: 10,
  }
})

export default ProgressBar