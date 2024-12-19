import React, { useState, useEffect, useRef } from 'react';
import { View, Button } from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';

const EmojiPicker = ({ onEmojiSelect }) => {
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker((prev) => !prev);
    };

    return (
        <View>
            <Button title="이모티콘 선택" onPress={togglePicker}>

            </Button>
            {showPicker && (
                <EmojiSelector
                    onEmojiSelected={(emoji) => {
                        onEmojiSelect(emoji);
                        togglePicker();
                    }}
                />
            )}
        </View>
    );
};

export default EmojiPicker;
