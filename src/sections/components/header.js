import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

function Header(props) {
  return(
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Image
           source={require('../../../assets/logo.png')}
           style={styles.logo}
         />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.textRight}>
            { props.children }
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
    backgroundColor: 'green',
  },
  textRight: {
    backgroundColor: 'yellow',
    textAlignVertical: 'center',
  }
})

export default Header;