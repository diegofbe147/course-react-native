import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import TimeLeft from '../components/time-left';
import Mute from '../components/mute';
import Fullscreen from '../components/fullscreen';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    duration: 0,
    interval: 0.005614917,
    progress: 0,
    timeLeft: 0,
    fullscreen: false,
    volume: 1,
  };

  onLoad = data => {
    let minutes = Math.floor(data.duration / 60) % 60;
    let seconds = Math.floor(data.duration - minutes * 60);
    let time = `${minutes}:${seconds}`;
    this.setState({
      loading: false,
      duration: time,
      interval: 0.1 / data.duration,
    });
  };

  onProgress = data => {};

  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };

  mute = () => {
    this.state.volume === 1
      ? this.setState({volume: 0})
      : this.setState({volume: 1});
  };

  fullscreen = () => {
    this.setState({
      fullscreen: !this.state.fullscreen,
    });
  };

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4',
            }}
            style={styles.player}
            resizeMode="cover"
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            paused={this.state.paused}
            volume={this.state.volume}
            fullscreen={this.state.fullscreen}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} pause={this.state.paused} />
            <ProgressBar progress={this.state.progress} />
            <TimeLeft
              timeLeft={this.state.timeLeft}
              duration={this.state.duration}
            />
            <Mute onPress={this.mute} volume={this.state.volume} />
            <Fullscreen onPress={this.fullscreen} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Player;
