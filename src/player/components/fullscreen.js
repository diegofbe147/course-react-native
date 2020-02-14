import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

function Fullscreen(props) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="red"
      onPress={props.onPress}>
      <Text style={styles.label}>Full</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 25,
    backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 30,
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default Fullscreen;
