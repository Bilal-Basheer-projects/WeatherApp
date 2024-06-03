// Weather.js

import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style'; // You can define styles specific to Weather component here

const WeatherBody = ({weatherData}) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.header}>
        <Text style={styles.locationText}>
          {weatherData?.name ?? 'Rahim Yar Khan'}
        </Text>
        <Text style={styles.rainText}>
          {`${weatherData?.weather[0]?.main} - ${weatherData?.weather[0]?.description}` ??
            ''}
        </Text>
      </View>

      <Image
        source={{
          uri: `https://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`,
        }}
        style={styles.weatherIcon}
        resizeMode="cover"
      />

      <Text style={styles.temperatureText}>
        {Math.round(weatherData?.main?.temp)}°C
      </Text>
    </View>
  );
};

WeatherBody.propTypes = {
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherBody;
