import React, { useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { RoundButton } from '../Button/roundButton'; // Asegúrate de importar el RoundButton desde la ruta correcta

interface SpeedDialItem {
  iconName: string;
  onPress: () => void;
}

interface SpeedDialProps {
  mainButtonColor?: string;
  mainButtonBorderColor?: string;
  mainButtonIconName: string;
  items: SpeedDialItem[];
}

export const SpeedDial: React.FC<SpeedDialProps> = ({
  mainButtonColor,
  mainButtonBorderColor,
  mainButtonIconName,
  items,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const animation = new Animated.Value(0);
    
    const toggleMenu = () => {
      Animated.timing(animation, {
        toValue: isOpen ? 0 : 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      setIsOpen(!isOpen);
    };
    
    const renderItems = () => {
        const itemsToRender = items.map((item, index) => {
          const translateY = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [(items.length - index) * -60, 0],
          });
      
          return (
            <Animated.View
              key={`speed-dial-item-${index}`}
              style={[styles.itemContainer, { transform: [{ translateY }] }]}
            >
              <RoundButton
                iconName={item.iconName}
                color={mainButtonColor}
                borderColor={mainButtonBorderColor}
                onPress={() => {
                  item.onPress();
                  toggleMenu();
                }}
              />
            </Animated.View>
          );
        });
        return <View style={styles.itemsWrapper}>{itemsToRender}</View>;
    };
      
    return (
        <View style={styles.container}>
          {isOpen && renderItems()}
          <RoundButton
            iconName={mainButtonIconName}
            color={mainButtonColor}
            borderColor={mainButtonBorderColor}
            onPress={toggleMenu}
          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 16,
      right: 16,
    },
    itemsWrapper: {
      position: 'absolute',
      bottom: 60,
    },
    itemContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
});
  
