import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import CustomTypography from './customTypography';

interface CustomTextareaProps {
    label?: string;
    details?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    numberOfLines: number;
    maxLength: number;
}

const CustomTextarea = ({ 
    label, 
    details, 
    value, 
    onChangeText, 
    placeholder, 
    numberOfLines = 5,
    maxLength = 1000
}: CustomTextareaProps) => {
    return (
        <View style={styles.view}> 
            {label && <CustomTypography text={label} tag="h2" />} 
            {details && <CustomTypography text={details} tag="small" />} 
            <TextInput
                value={value} 
                style={[styles.input]} 
                onChangeText={onChangeText} 
                underlineColorAndroid="transparent"
                placeholder={placeholder} 
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                multiline={true}
            />
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
        backgroundColor: "#fff"
    }
});

export default CustomTextarea;