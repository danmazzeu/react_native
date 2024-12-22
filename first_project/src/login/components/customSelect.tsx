import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomError from './customError';
import CustomTypography from './customTypography';

interface CustomSelectProps {
    label?: string;
    details?: string;
    data: { key: string; value: string; disabled?: boolean }[];
    onSelect: (value: string) => void;
    error?: string;
    style?: any;
}

const CustomSelect = ({ label, details, data, onSelect, error, style }: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <View style={[styles.view, style]}>
            {label && <CustomTypography text={label} tag='h2' />} 
            {details && <CustomTypography text={details} tag='small' />} 
            <SelectList 
                setSelected={handleSelect} 
                data={data} 
                save="value" 
                placeholder="Selecione uma opção" 
                searchPlaceholder='Buscar'
                boxStyles={{ 
                    padding: 10, 
                    borderColor: '#ccc', 
                    borderWidth: 1, 
                    borderRadius: 10,
                    paddingBlock: 15,
                    borderBlockColor: "#ccc"
                }}
                dropdownStyles={{
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 10
                }}
            />
            {error && <CustomError text={error} />}
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
        backgroundColor: '#fff'
    }
});

export default CustomSelect;