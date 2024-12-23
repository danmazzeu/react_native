import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';

interface CustomContainerProps {
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    gap?: number;
    children: React.ReactNode;
}

const CustomContainer = ({ 
    children, 
    alignItems, 
    justifyContent, 
    gap
  }: CustomContainerProps) => {
    const { height } = Dimensions.get("window");
    const totalHeight = height + (StatusBar.currentHeight ?? 0);
  
    return (
        <View style={[styles.container, { 
                height: totalHeight,
                gap 
            },
            alignItems && { alignItems }, 
            justifyContent && { justifyContent },
        ]}>
        {children}
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 30,
        backgroundColor: "#f9f9f9"
    },
});

export default CustomContainer;