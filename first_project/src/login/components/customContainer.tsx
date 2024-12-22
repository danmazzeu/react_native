import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';

interface CustomContainerProps {
    children: React.ReactNode;
}

const CustomContainer = ({ children }: CustomContainerProps) => {
    const { height } = Dimensions.get('window');
    const totalHeight = height + (StatusBar.currentHeight ?? 0);
  
    return (
        <View style={[styles.container, { height: totalHeight }]}> 
            {children} 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 15,
        paddingTop: StatusBar.currentHeight,
        padding: 30,
        backgroundColor: '#f9f9f9'
    }
});

export default CustomContainer;