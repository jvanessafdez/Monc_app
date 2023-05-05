import { colors } from './color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 26,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
  },
});
