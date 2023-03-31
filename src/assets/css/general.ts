import { Row } from 'native-base';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row:{
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHorizontal: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    centerVertical: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex:1
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        width:'100%'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '90%',
        marginEnd: 10
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        margin:5
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        paddingTop: 30,
        height: 80
    }
})