import React, { useMemo } from 'react';
import { Text, Box, Badge } from 'native-base';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import { CustomIcon } from '../Icon/icon';
import { roundButton, colors, general } from 'assets';
 
type IconMappingType = {
  [key: string]: React.ComponentType<IconProps>;
};

interface RoundButtonProps {
  text?: string;
  iconName?: string;
  iconType?: keyof IconMappingType;
  color?: string;
  width?: number | any;
  borderColor?: string;
  icon?: any;
  disabled?: boolean;
  onPress?: any;
  badge?: boolean;
  style?: ViewStyle;
  label?: string;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  color,
  width,
  borderColor,
  iconName,
  iconType = 'MaterialIcons',
  disabled,
  onPress,
  badge,
  style,
  label,
}) => {
  const widthMed = width ? width / 2 : roundButton.button.borderRadius;

  const dynamicStyles = useMemo(() => {
    return {
      backgroundColor: color
        ? color
        : disabled
        ? colors.disableTransparent
        : borderColor
        ? '#FFFFFF'
        : roundButton.button.backgroundColor,
      borderColor: borderColor ? borderColor : 'transparent',
      borderWidth: 2,
      width: width ? width : roundButton.button.width,
      height: width ? width : roundButton.button.height,
      borderRadius: width ? widthMed + 2 : roundButton.button.borderRadius,
    };
  }, [color, width, borderColor, disabled, style]);

  const dynamicTextStyle = useMemo(() => {
    return {
      color: disabled ? colors.disable : color ? color : borderColor ? borderColor : '#FFFFFF',
      fontSize: widthMed,
    };
  }, [color, borderColor, disabled, widthMed]);

  const content = (
    <Box style={general.centerHorizontal}>
      {iconName && (
        <CustomIcon
          name={iconName}
          iconType={iconType}
          color={borderColor ? borderColor : '#FFFFFF'}
          size={width ? widthMed : 32}
        />
      )}
      {text && <Text style={dynamicTextStyle}>{text}</Text>}
    </Box>
  );

  const labelColor = color ? color : roundButton.button.backgroundColor;

  return disabled ? (
    <Box style={[roundButton.button, dynamicStyles]}>{content}</Box>
  ) : (
    badge ? (
      <TouchableOpacity onPress={onPress}>
        <Badge
          bg={color}
          rounded="full"
          mr={-4}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
        >
          <Text fontSize="xs" color="white">
            {text}
          </Text>
        </Badge>
      </TouchableOpacity>
    ) : (
      <Box style={style}>
        <TouchableOpacity onPress={onPress} style={[roundButton.button, dynamicStyles]}>
          {content}
        </TouchableOpacity>
        {label && <Text style={[roundButton.label, { color: labelColor }]}>{label}</Text>}
      </Box>
    )
  );
};
