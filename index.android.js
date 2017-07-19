// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Map from './src/components/Map'

export default class boltexcu extends Component {
  render() {
    return <Map />
  }
}

AppRegistry.registerComponent('boltexcu', () => boltexcu);
