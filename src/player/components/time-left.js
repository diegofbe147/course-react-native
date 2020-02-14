import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TimeLeft(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.timeInfo}>
        {props.timeLeft} / {props.duration}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginRight: 10,
  },
  timeInfo: {
    fontWeight: 'bold',
  },
});

export default TimeLeft;
