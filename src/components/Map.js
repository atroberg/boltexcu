// @flow
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {observable} from 'mobx'
import {View, Linking, Text} from 'react-native'
import MapView from 'react-native-maps'
import {debounce} from 'lodash'

@observer
class Map extends Component {
  
  @observable region = {
    latitude: 60.2018968,
    longitude: 24.9070907,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  
  @observable markers = [{
    id: 1,
    title: 'Lorem',
    coordinate: {
      latitude: 60.2018968,
      longitude: 24.9070907,
    },
  }]
  
  render = () => {
    return (
      <MapView
        style={{flex: 1}}
        region={this.region}
        showsUserLocation
        showsMyLocationButton
        onRegionChange={newRegion => {
          this.region = newRegion
        }}
      >
        {this.markers.map(marker => {
          return (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinate}
            >
              <MapView.Callout>
                <Text>{marker.title}</Text>
              </MapView.Callout>
            </MapView.Marker>
          )
        })}
      </MapView>
    )
  }
  
}

export default Map