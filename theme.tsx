import { extendTheme } from 'native-base';
import { Platform, PlatformColor } from 'react-native';

const theme = extendTheme({
    colors: {
        // Fondo blanco
        background: PlatformColor('#FFFFFF'),
        // Azul #01C6C0
        primary: {
            50: '#E3FDFD',
            100: '#C5F6FA',
            200: '#99E9F2',
            300: '#66D9E8',
            500: '#1CC7C0',
            600: '#0097A7',
            700: '#00838F',
            800: '#006B75',
            900: '#004D61'
        },
    },
});

export default theme;