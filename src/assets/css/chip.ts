import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tinyChip: {
        width: 80,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    normalChip: {
      width: 100,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row'
    },
    tinyText: {
      color:'#49556D',
      fontSize:10,
    },
    normalText: {
      color:'#FFFFFF',
    }
})