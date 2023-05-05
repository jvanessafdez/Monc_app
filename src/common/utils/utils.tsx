import { Platform } from 'react-native';
import { format, parseISO } from 'date-fns';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';


interface FormattedDates {
  timeFormat: string;
  monthAbbr: string;
  dayNumber: string;
  monthAndDay: string;
}

export const formatDate = (dateString: string): FormattedDates => {
  const date = parseISO(dateString);

  const timeFormat = format(date, 'hh:mm aa');
  const monthAbbr = format(date, 'MMM');
  const dayNumber = format(date, 'd');
  const monthAndDay = format(date, 'MMMM d');

  return {
    timeFormat,
    monthAbbr,
    dayNumber,
    monthAndDay
  };
};

export const getCurrentLocation = (): Promise<Geolocation.GeoPosition | undefined> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        console.error(error);
        resolve(undefined);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });
};

export const requestLocationPermission = async (): Promise<Geolocation.GeoPosition | undefined> => {
  const checkPermission = Platform.OS === 'ios' 
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  const permission = await check(checkPermission);

  if (permission === RESULTS.DENIED) {
    const requestPermission = Platform.OS === 'ios' 
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await request(requestPermission);
    
    if (result === RESULTS.GRANTED) {
      return getCurrentLocation();
    } else {
      // Permiso denegado.
      return undefined;
    }
  } else if (permission === RESULTS.GRANTED) {
    return getCurrentLocation();
  }
  return undefined;
};

