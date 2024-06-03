// utils/locationPermissions.js

import {PermissionsAndroid, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

  async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.OS === 'ios') {
      const permission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (permission === RESULTS.DENIED) {
        const granted = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        return granted === RESULTS.GRANTED;
      }
      return permission === RESULTS.GRANTED;
    }
    return true;
  }

 async function getCurrentLocation() {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) return null;

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      error => {
        console.error(error);
        reject(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  });
}

  export default {
    requestLocationPermission,
    getCurrentLocation
};
