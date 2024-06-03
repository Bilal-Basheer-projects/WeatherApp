import {StyleSheet} from 'react-native';
import { config } from '../../utils/config';
import { FontSize, Width } from '../../utils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.BoxColor,
    justifyContent: 'center',
    padding: Width(5),
    margin: Width(2),
    borderRadius: Width(3)
  },
  title: {
    fontSize: FontSize(16),
    fontWeight: 'bold',
    color: config.LightBlack,
    textAlign: 'left'
  },
  value: {
    fontSize: FontSize(14),
    color: config.LightBlack,
    textAlign: 'left',
    marginTop: Width(1)
  },
});

export default style;
