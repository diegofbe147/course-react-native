import React, {Component} from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Video from 'react-native-video';

import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'

class Player extends Component{

  state = {
    loading: true,
    paused: false,
  }

  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  render(){
    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri:'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4'}}
            style={styles.player}
            resizeMode='cover'
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={
          <ActivityIndicator color='red'/>
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              pause={this.state.paused}
            />
            <Text>Progress bar |</Text>
            <Text> Time left |</Text>
            <Text> Fullscreen</Text>
          </ControlLayout>
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