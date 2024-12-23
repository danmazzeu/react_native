import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface errorProps {
    isValid: boolean,
    message: string
}

interface CustomErrorProps {
    error: errorProps;
}

const CustomError = ({ 
    error,
}: CustomErrorProps,) => {
    if (error.message == '') {
        return false;
    }

    if (error.isValid == true) {
        return (
            <Text style={(styles.text, styles.success)}>{error.message}</Text>
        );  
    } else {
        return (
            <Text style={(styles.text, styles.fail)}>{error.message}</Text>
        ); 
    }
};

const styles = StyleSheet.create({
    text: {
        display: "none",
        fontSize: 16,
        color: "red",
        borderColor: "red",
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 15,
        lineHeight: 22
    },
    success: {
        color: "green",
        borderColor: "green",
    },
    fail: {
        color: "red",
        borderColor: "red",
    }
});

export default CustomError;