import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
      flex: 1,
    },
    mapContainer: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: '15%',
      right: 12,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flex: 1,
      padding: 8,
      alignItems:'center'
    },
    bottomSheetBackground: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    handleContainer: {
      alignItems: 'center',
      marginBottom: 6,
    },
    handle: {
      width: 40,
      height: 5,
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: '#DFDFDF',
    },
  });
  