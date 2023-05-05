import React from 'react';
import { Box } from 'native-base';
import cards from 'assets/css/cards';

interface SmallCardProps {
  children: React.ReactNode;
}

export const SmallCard: React.FC<SmallCardProps> = ({ children }) => {
  return <Box style={cards.smallCard}>{children}</Box>
};
