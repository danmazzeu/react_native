import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomTypography from './customTypography';

interface CustomSelectProps {
    label?: string;
    details?: string;
    options: { key: string; value: string; disabled?: boolean }[];
    onSelect: (value: string) => void;
    style?: any;
}

const CustomSelect = ({ 
    label, 
    details, 
    options, 
    onSelect, 
    style
}: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <View style={[styles.view, style]}>
            {label && <CustomTypography text={label} tag="h2" />} 
            {details && <CustomTypography text={details} tag="small" />} 
            <SelectList 
                setSelected={handleSelect} 
                data={options} 
                save="value" 
                placeholder="Select an option" 
                searchPlaceholder="Search"
                boxStyles={{ 
                    padding: 10, 
                    borderColor: "#ccc", 
                    borderWidth: 1, 
                    borderRadius: 10,
                    paddingBlock: 14,
                    backgroundColor:  "#fff",
                    borderBlockColor: "#ccc"
                }}
                dropdownStyles={{
                    borderColor: "#ccc",
                    borderWidth: 1,
                    borderRadius: 10
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        gap: 5,
    },
    select: {
        fontSize: 16,
        width: "100%",
        backgroundColor: "#fff"
    }
});

export default CustomSelect;