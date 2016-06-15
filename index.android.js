import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  Text,
  View
} from 'react-native';

var Images = require('./App/components/ImageLoader/ImageLoader.js');
//var Trash = require('./App/views/trashcan/trash.android.js');


class FotoApp extends Component {
  render() {
    return (
      <Images/>
    );

  }
}

AppRegistry.registerComponent('FotoApp', () => FotoApp);
