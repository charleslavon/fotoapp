import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  Text,
  View
} from 'react-native';

//var Images = require('./App/components/imageLoader/imageLoader.android.js');
//var Trash = require('./App/views/trashcan/trash.android.js');

var MOCKED_IMAGE_DATA = [
  {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
];

class FotoApp extends Component {
  render() {
    var image = MOCKED_IMAGE_DATA[0];

    return (
      <View style={styles.container}>
        <Image source={{uri: image.thumbnail}}
              style={styles.thumbnail}/>
      </View>
    );

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('FotoApp', () => FotoApp);
