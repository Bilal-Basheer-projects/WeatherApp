import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const WeatherDetail = ({ title, value, isMetric }) => {
  const [isCelsius, setIsCelsius] = useState(isMetric);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temp) => {
    if (isCelsius) {
      return `${temp} °C`;
    } else {
      const fahrenheit = (temp * 9 / 5) + 32;
      return `${fahrenheit.toFixed(2)} °F`;
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={toggleUnit}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.value}>{convertTemperature(value)}</Text>
    </TouchableOpacity>
  );
};

export default WeatherDetail;