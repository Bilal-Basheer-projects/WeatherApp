import {StyleSheet} from 'react-native';
import {FontSize, Height, Width} from '../../utils/dimensions';
import {config} from '../../utils/config';

const style = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    position: 'absolute',
    left: 0,
    right: 0,
    // top: 50,
    top: 0,
    bottom: 0,
    zIndex: 999,
  },
  loaderBody: {
    width: Width(60),
    height: Height(13),
    justifyContent: 'space-evenly',
    borderRadius: Width(5),
    backgroundColor: config.White,
  },
  text: {
    fontSize: FontSize(12),
    color: config.Black,
    textAlign: 'center',
  },
});

export default style;
