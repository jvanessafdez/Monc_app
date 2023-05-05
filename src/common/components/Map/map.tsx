import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { map } from 'assets';
import customMapStyle from '../../../assets/css/map-style.json'

interface MapProps {
    latitude: number;
    longitude: number;
    markerColor: string;
}

export const Map: React.FC<MapProps> = ({ latitude, longitude, markerColor }) => {
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    };
  
    return (
      <MapView 
        style={map.map} 
        initialRegion={region} 
        scrollEnabled={false}
        customMapStyle={customMapStyle}
      >
        <Marker coordinate={{ latitude, longitude }} pinColor={markerColor} title={'Mi ubicación'}/>
      </MapView>
    );
  };