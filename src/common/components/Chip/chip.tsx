import React from 'react';
import { Box, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { chip } from 'assets';

interface ChipProps {
  color?: string;
  icon?: boolean;
  pressable?: boolean;
  normal?: boolean;
  text: string;
}

export const Chip: React.FC<ChipProps> = ({ color, icon, pressable, normal, text }) => {
  
  const transparentColor = color + '33'
  const chipStyle = normal ? {
    ...chip.normalChip,
    backgroundColor: color || chip.normalChip.backgroundColor
  }
  : 
  {
    ...chip.tinyChip,
    backgroundColor: transparentColor || chip.tinyChip.backgroundColor
  };
  
  const textStyle = normal ? {
    ...chip.normalText
  }
  :
  {
    ...chip.tinyText,
    color: color || chip.tinyText.color
  }
  return (
    <Box style={chipStyle}>
      { icon ? <AntDesign name={'loading1'}/> : <></>}
      <Text style={textStyle}>{text}</Text>
    </Box>
  )
};
