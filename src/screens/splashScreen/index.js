import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.companyText}>HyseTech</Text>
        <View style={styles.appTextContianer}>
        <Text style={styles.appText}>Weather App</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.craterText}>
          <Text style={styles.craterTextPowered}>Powered by </Text>
          <Text style={styles.craterTextName}>Bilal Basheer</Text>
        </Text>
      </View>

    </View>
  );
};

export default SplashScreen;
