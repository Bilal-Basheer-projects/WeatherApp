import {View, Text} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import styles from './style';
import Header from '../../components/header';
import WeatherBody from '../../components/weatherBody';
import AppLoader from '../../components/AppLoader';
import utils from '../../utils/utils';
import apicalls from '../../helpers/apicalls';
import WeatherFooter from '../../components/weatherFooter';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() =>{
    handleOnGetCurrentLocation()
  }, [])

  const handleOnGetCurrentLocation = async () => {
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

  const handleOnGetWeatherData = data => {
    setWeatherData(data);
  };

  const toggleTemperatureUnit = () => {
    setIsMetric(!isMetric); 
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Dashboard'}
        handleOnGetWeatherData={data => handleOnGetWeatherData(data)}
        handleAppLoader={() => setWeatherData({})}
        toggleTemperatureUnit={toggleTemperatureUnit}
      />
      {Object.keys(weatherData).length > 0 ? (
        <Fragment>
        <WeatherBody weatherData={weatherData ?? {}} />
        <WeatherFooter weatherData={weatherData ?? {}}  isMetric={isMetric}/>
        </Fragment>
      ) : (
        <AppLoader 
          title={'Please Wait Weather Loading...'}
        />
      )}

    </View>
  );
};

export default Home;
