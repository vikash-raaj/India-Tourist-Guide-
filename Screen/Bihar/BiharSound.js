import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo';

// DOCUMENTATION:
// https://docs.expo.io/versions/v28.0.0/sdk/audio

export default class App extends Component {

  async componentDidMount() {

    this.playbackInstance = null;

    /* ERROR CATCH EXAMPLE!
    try {
      await this.playbackInstance.loadAsync(require('./assets/sounds/hello.mp3'));
      await this.playbackInstance.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
      console.log(error);
      return;
    } */

    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: false,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    const source = { uri: 'http://www.fromtexttospeech.com/output/0140636001529748451/37677532.mp3' };
    const audioSettings = {
      shouldPlay: false,
      rate: 1,
      shouldCorrectPitch: false,
      volume: 1,
      isMuted: false,
      isLooping: false,
      // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
      // androidImplementation: 'MediaPlayer',
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      audioSettings,
      this._onPlaybackStatusUpdate
    );

    this.playbackInstance = sound;
    console.log(status);

    setTimeout(function () {
      console.log('PLAY!');
      this.playbackInstance.playAsync();
    }.bind(this), 1000); // bind required! ( play after 2 seconds! )

    setTimeout(function () {
      console.log('PAUSE!');
      this.playbackInstance.pauseAsync();
    }.bind(this), 25000); // bind required! ( pause after 4 seconds! )
  }

  render() {
    return (
      <Text>BLANK AUDIO</Text>
    );
  }
}
