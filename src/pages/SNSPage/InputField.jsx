import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const InputField = ({
                        label,
                        value,
                        onChangeText,
                        placeholder,
                        multiline = false,
                        style: customStyle = {},
                        ...rest
                    }) => {
    return (
        <View style={[styles.container, customStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, multiline && styles.multilineInput]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline={multiline}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height:'80%',
    },
    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    input: {
        padding: 15,
        fontSize: 16,
        height: '100%'
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});

export default InputField;
