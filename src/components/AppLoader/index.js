import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {config} from '../../utils/config';

const AppLoader = props => {
  const {title} = props;
  return (
    <View style={style.loaderContainer}>
      <View style={style.loaderBody}>
        <ActivityIndicator size="large" color={config.LightBlack} />
        <View>
          <Text style={style.text}>{title ? title : 'Please Wait...'}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppLoader;
