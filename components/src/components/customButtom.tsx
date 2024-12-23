import { Text, GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomButtonProps {
    text: string;
    onPress?: (event: GestureResponderEvent) => void | undefined
}

const CustomButton = ({ 
    text, 
    onPress
}: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: "#333",
        width: "30%"
    },
    text: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center"
    }
});

export default CustomButton;