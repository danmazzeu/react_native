import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CustomErrorProps {
    text?: string;
}

const CustomError = ({ text }: CustomErrorProps) => {
    if (!text) {
        return null; 
    }

    return (
        <Text style={styles.text}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "red",
        borderColor: 'red',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 15,
        lineHeight: 22,
    },
});

export default CustomError;