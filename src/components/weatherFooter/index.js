import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {config} from '../../utils/config';
import WeatherDetail from '../weatherDetails';

const WeatherFooter = ({weatherData, isMetric}) => {
  const weatherDetails = [
    { title: 'Temperature', value: weatherData.main.temp, isMetric },
    { title: 'Feels Like', value: weatherData.main.feels_like, isMetric },
    { title: 'Min Temp', value: weatherData.main.temp_min, isMetric },
    { title: 'Max Temp', value: weatherData.main.temp_max, isMetric },
    { title: 'Pressure', value: weatherData.main.pressure, isMetric },
    { title: 'Humidity', value: weatherData.main.humidity, isMetric },
  ];
  return (
    <View>
      <FlatList
        data={weatherDetails ?? []}
        numColumns={2}
        renderItem={({item}) => (
          <WeatherDetail title={item?.title} value={item?.value} isMetric={isMetric}/>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default WeatherFooter;
