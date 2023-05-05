import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { Map, RoundButton, Draggable, Loader, Chip } from 'common/components';
import { colors, map, general } from 'assets';
import { useEffect, useState, useCallback } from 'react';
import { requestLocationPermission } from 'common';
import Geolocation from 'react-native-geolocation-service';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/navigationTYpes/navigationTypes';
import { Camera } from 'common/components/Camera/camera';

type ScreenNameRouteProp = RouteProp<RootStackParamList, 'check-in-out'>;

type Props = {
  route: ScreenNameRouteProp;
};

export const CheckInOut: React.FC<Props> = ({ route }) => {
  const { shift } = route.params;
  const [location, setLocation] = useState<Geolocation.GeoPosition | undefined>(undefined);
  const [showCamera, setShowCamera] = useState<boolean>(false)
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  
  const fetchLocation = useCallback(async () => {
    setLocation(undefined);
    const location = await requestLocationPermission();
    setLocation(location);
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  const color = {
    created: colors.primary,
    active:colors.inactive,
    closed: colors.active,
  };

  const textButton = {
    created: 'Check In',
    active:'Check Out',
    closed: '',
  };

  const renderCamera = () => {
    return <Camera showCamera={showCamera} setShowCamera={setShowCamera} photoUri={photoUri} setPhotoUri={setPhotoUri}/>
  }

  const renderMainContent = () => (
    <View style={map.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={map.mapContainer}>
        <Map latitude={location!.coords.latitude} longitude={location!.coords.longitude} markerColor={color[shift.status]} />
        <View style={map.buttonContainer}>
          <RoundButton iconName="location-sharp" iconType={'Ionicons'} width={50} style={general.marginBottom20} onPress={fetchLocation} color={color[shift.status]}/>
          <RoundButton iconName="camera" iconType={'Ionicons'} width={50} label = {textButton[shift.status]} onPress={() => setShowCamera(true)} color={color[shift.status]}/>
        </View>
        <Draggable>
          <View style={map.contentContainer}>
            <Chip text={'Imagen'} color={color[shift.status]} normal/>
            <View style={{marginTop:25}}>
              {photoUri ? (
                <Image
                  source={{ uri: photoUri }}
                  style={{ width: 300, height: 500 }}
                />
              ) : (
                <Text>No se ha tomado ninguna foto</Text>
              )}
            </View>
          </View>
        </Draggable>
      </View>
    </View>
  );

  return showCamera ? renderCamera() : location ? renderMainContent() : Loader();
}