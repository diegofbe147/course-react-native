import React, {Component} from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Video from 'react-native-video';

import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'
import TimeLeft from '../components/time-left'

class Player extends Component{

  state = {
    loading: true,
    paused: false,
    duration: 0,
    interval: 0.005614917,
    progress: 0,
    timeLeft: 0,
  }

  onLoad = (data) => {
    this.setState({
      loading: false,
      duration: data.duration,
      //interval: 1/data.duration
    })
  }

  onProgress = (data) => {
    this.state.timeLeft == this.state.duration ?
    this.setState({
      timeLeft: this.state.duration
    })
    :
    this.setState({
      timeLeft: data.currentTime
    })

    this.state.progress >= 1 ?
      this.setState({progress:1}) :
      this.setState({progress: this.state.progress+this.state.interval})
  }

  playPause = () => {
    console.log('progreso',this.state.interval)
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
            onProgress={this.onProgress}
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
            <ProgressBar progress={this.state.progress}/>
            <TimeLeft 
              timeLeft={this.state.timeLeft}
              duration={this.state.duration}
            />
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