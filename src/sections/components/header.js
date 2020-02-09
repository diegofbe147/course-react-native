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
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  textRight: {
    textAlignVertical: 'center',
  }
})

export default Header;