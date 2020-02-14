import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

function Mute(props) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={props.onPress}
      underlayColor="red">
      {
        props.volume === 1
          ? <Text style={styles.button}>MUTE</Text>
          : <Text style={styles.button}>UNMUTE</Text>
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
    width: 55,
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Mute;
