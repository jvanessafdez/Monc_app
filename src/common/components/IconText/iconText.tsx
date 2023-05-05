import React from 'react';
import { Box, Text } from 'native-base';
import { CustomIcon } from '../Icon/icon'

interface IconTextProps {
    iconType: string;
    iconName: string;
    text:string;
    color: string;
    width?: string | number | null;
}

export const IconText: React.FC<IconTextProps> = ({ iconType, iconName, text, color, width }) => {
  return(
    <Box flexDirection='row' width={width ? width : '35%'} alignItems={'center'}>
      <CustomIcon 
        iconType={iconType} 
        name={iconName} 
        size={18} 
        color={color}
        marginText
      />
      <Text color={color} fontSize = {14}>{text}</Text>
    </Box>
  )
}