import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';

const MarkdownToolbar = ({ onAction }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker((prev) => !prev);
    };
    const closeEmojiPicker = () => {
        setShowEmojiPicker(false);
    };

    return (
        <View style={styles.toolbarContainer}>
            {/* 툴바 */}
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={() => onAction('**굵은 텍스트**')} style={styles.iconWrapper}>
                    <Icon name="bold" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onAction('_기울임 텍스트_')} style={styles.iconWrapper}>
                    <Icon name="italic" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onAction('[링크 텍스트](https://example.com)')} style={styles.iconWrapper}>
                    <Icon name="link" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onAction('\n- 리스트 아이템')} style={styles.iconWrapper}>
                    <Icon name="list" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleEmojiPicker} style={styles.iconWrapper}>
                    <Icon name="smile-o" size={20} color="gray" />
                </TouchableOpacity>
            </View>

            {/* 이모지 피커 */}
            {showEmojiPicker && (
                <View style={styles.emojiPickerContainer}>
                    <TouchableOpacity onPress={closeEmojiPicker} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>취소</Text>
                    </TouchableOpacity>
                    <EmojiSelector
                        onEmojiSelected={(emoji) => {
                            onAction(emoji); // 선택된 이모지를 상위 콜백으로 전달
                            toggleEmojiPicker();
                        }}
                        showSearchBar={false} // 검색바 숨김
                        showTabs={true} // 카테고리 탭 표시
                        columns={8} // 컬럼 수 설정
                    />
                    <TouchableOpacity onPress={closeEmojiPicker} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>취소</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 8,
    },
    iconWrapper: {
        alignItems: 'center',
    },
    toolbarButton: {
        fontSize: 12,
        color: '#007AFF',
        marginTop: 5,
    },
    emojiPickerContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: '100%', // 툴바 아래에 표시
        left: 0,
        right: 0,
        zIndex: 2, // 툴바 위에 표시
        elevation: 5, // 안드로이드 그림자
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    closeButtonText: {
        fontSize: 14,
        color: '#007AFF',
    },
});

export default MarkdownToolbar;
