import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AnyIcon, {Icons} from '../anyIcon';
import {FontSize} from '../../utils/dimensions';
import {config} from '../../utils/config';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import utils from '../../utils/utils';
import apicalls from '../../helpers/apicalls';

const Header = props => {
  const {title, handleOnGetWeatherData, handleAppLoader} = props;
  const navigation = useNavigation();

  const handleOnGetCurrentLocation = async () => {
    handleAppLoader()
   const userLatLong = await utils.getCurrentLocation().then((payload) => {
    const data = {
        latitude: payload?.latitude,
        longitude: payload?.longitude,
    }
    const abc = apicalls?.fetchWeatherData(data).then((payload) => {
      handleOnGetWeatherData(payload)
    })
   })
  };
  return (
    <View style={styles.container}>
      {/* Go Back to SplashScreen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Splash')}
        style={styles.goBackScreen}>
        <AnyIcon
          type={Icons.Ionicons}
          name="chevron-back"
          size={FontSize(20)}
          color={config.White}
        />
      </TouchableOpacity>

      {/* Heasder Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* Take Current Location */}
      <TouchableOpacity
        onPress={() => handleOnGetCurrentLocation()}
        style={styles.currentLocation}>
        <AnyIcon
          type={Icons.MaterialIcons}
          name="my-location"
          size={FontSize(20)}
          color={config.White}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
