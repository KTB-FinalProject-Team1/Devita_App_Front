import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WheelColorPicker from 'react-native-wheel-color-picker';

const ColorPicker = ({ onColorSelected }) => {
    const [selectedColor, setSelectedColor] = useState('#CCCCCC');

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleConfirm = () => {
        if (onColorSelected) {
            onColorSelected(selectedColor);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.colorDisplay, {color:selectedColor}]}>Selected Color: {selectedColor}</Text>

            <View style={styles.colorPickerWrapper}>
                <WheelColorPicker
                    onColorChange={handleColorChange}
                    selectedColor={selectedColor}
                    style={styles.colorPicker}
                />
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        padding: 20,

    },
    colorDisplayWrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorDisplay: {
        marginBottom: 10,
        fontSize: 16,

    },
    colorIndicator: {
        width: 30,
        height: 30,
        borderRadius: 25, // 원형 표시
        marginBottom: 10,
    },
    colorPickerWrapper: {
        width: 200, // 부모 컨테이너 너비 제한
        height: 200, // 부모 컨테이너 높이 제한
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // 초과된 부분 숨김,
    },
    colorPicker: {
        width: 100, // WheelColorPicker 너비
        height: 100, // WheelColorPicker 높이
    },
    confirmButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#7DB1FF',
        borderRadius: 12,
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ColorPicker;
