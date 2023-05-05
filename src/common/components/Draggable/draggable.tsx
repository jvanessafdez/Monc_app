import React, { useRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { map } from 'assets';

interface DraggableProps {
  children: React.ReactNode;
}

const CustomHandle = () => {
  return (
    <View style={map.handleContainer}>
      <View style={map.handle} />
    </View>
  );
};

export const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['10%', '10%', '90%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      handleComponent={CustomHandle}
      backgroundComponent={({ style }) => (
        <View style={[style, { backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }]} />
      )}
    >
      {children}
    </BottomSheet>
  );
};