import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import CustomError from './customError';
import CustomTypography from './customTypography';

interface CustomInputProps {
    label?: string;
    details?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    error?: string;
    secureTextEntry?: boolean;
}

const CustomInput = ({ 
    label, 
    details, 
    value, 
    onChangeText, 
    placeholder, 
    error, 
    secureTextEntry = false
}: CustomInputProps) => {
    return (
        <View style={styles.view}> 
            {label && <CustomTypography text={label} tag='h2' />} 
            {details && <CustomTypography text={details} tag='small' />} 
            <TextInput 
                value={value} 
                onChangeText={onChangeText} 
                placeholder={placeholder} 
                style={[styles.input]} 
                secureTextEntry={secureTextEntry} 
            />
            {error && <CustomError text={error} />}
        </View>
    );
};
  
const styles = StyleSheet.create({
    view: {
        gap: 5,
    },
    input: {
        fontSize: 16,
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 10,
        backgroundColor: '#fff'
    }
});

export default CustomInput;