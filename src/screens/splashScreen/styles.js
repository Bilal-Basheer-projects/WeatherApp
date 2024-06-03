import {StyleSheet} from 'react-native';
import {config} from '../../utils/config';
import {FontSize, Height, Width} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: config.Black,
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  companyText: {
    fontSize: FontSize(28),
    fontWeight: 'bold',
    color: config.White,
  },
  appTextContianer: {
    margin: Width(1),
  },
  appText: {
    fontSize: FontSize(14),
    color: config.LightBlack,
  },
  footerContainer: {
    position: 'absolute',
    bottom: Height(2),
    alignItems: 'center',
  },
  craterText: {
    fontSize: FontSize(14),
    color: config.White,
  },
  craterTextPowered: {
    color: config.LightBlack,
  },
  craterTextName: {
    color: config.White,
    fontSize: FontSize(16),
    fontWeight: 'bold',
  },
});

export default styles;
