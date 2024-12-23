import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CustomTypographyProps {
    text: string;
    tag: "h1" | "h2" | "h3" | "p" | "small";
}

const CustomTypography = ({ text, tag }: CustomTypographyProps) => {
    let textStyle;

    switch (tag) {
        case "h1":
        textStyle = styles.h1;
        break;
        case "h2":
        textStyle = styles.h2;
        break;
        case "h3":
        textStyle = styles.h3;
        break;
        case "p":
        textStyle = styles.p;
        break;
        case "small":
        textStyle = styles.small;
        break;
        default:
        textStyle = styles.p;
    }

    return (
        <Text style={textStyle}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: "bold"
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold"
    },
    h3: {
        fontSize: 18,
        fontWeight: "bold"
    },
    p: {
        fontSize: 16, 
    },
    small: {
        fontSize: 13,
        marginTop: -5
    },
});

export default CustomTypography;