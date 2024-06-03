import {StyleSheet} from 'react-native';
import {config} from '../../utils/config';
import {FontSize, Width} from '../../utils/dimensions';

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: Width(10),
    elevation: 5,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: FontSize(24),
    color: config.White,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rainText: {
    fontSize: FontSize(14),
    color: config.LightBlack,
  },
  temperatureText: {
    fontSize: FontSize(24),
    color: config.White,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conditionText: {
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  weatherIcon: {
    width: Width(30),
    height: Width(30),
  },
});

export default styles;
