import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
import { Box } from 'native-base';
import { general } from 'assets';
import { TouchableOpacity } from 'react-native';

type IconMappingType = {
    [key: string]: React.ComponentType<IconProps>;
};
  
type CustomIconProps = {
    iconType: keyof IconMappingType;
    name: string;
    size?: number;
    color?: string;
    marginText?: boolean;
    marginButton?: boolean;
    pressable?: boolean;
    onPress?: () => void; 
};

const IconMapping: IconMappingType = {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
    Zocial,
    SimpleLineIcons
}

export const CustomIcon: React.FC<CustomIconProps> = ({iconType, name, size, color, marginText, marginButton, pressable, onPress}) => {
    const IconComponent = IconMapping[iconType];
    const boxStyle = marginText ? general.marginRight10 : marginButton ? general.marginRight5 : {};
    const iconElement = (
        <Box style={boxStyle}>
            <IconComponent name={name} size={size} color={color} />
        </Box>
    );

    return pressable ? <TouchableOpacity onPress={onPress}>{iconElement}</TouchableOpacity> : iconElement;
};