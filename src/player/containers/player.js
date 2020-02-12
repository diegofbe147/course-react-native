import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video';

import Layout from '../components/layout'

class Player extends Component{
  render(){
    return(
      <Layout
        video={
          <Video
            source={{uri:'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4'}}
            style={styles.player}
            resizeMode='cover'
            controls={true}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  player:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})

export default Player