import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 5,
      left: 5,
      right: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 16,
    }
  });