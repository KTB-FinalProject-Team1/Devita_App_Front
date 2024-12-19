import React, { useState } from 'react';
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as style from "./style/SNS.write";
import Icon from 'react-native-vector-icons/FontAwesome';
import leftImage from "../../assets/img/left.png";
import InputField from "./InputField";
import MarkDownToolBar from "./MarkDownToolBar";
import ImageUploader from "./ImageUploader";
import sampleUserProfileImg from '../../assets/img/profile1.png';

import postFeed from "../../api/PostFeed";

function SNSStoryMain() {
    const [storyContent, setStoryContent] = useState('');
    const [selectedImages, setSelectedImages] = useState([]); // 배열로 변경

    const navigation = useNavigation();
    const sampleUserName = AsyncStorage.getItem('nickname');

    const handleGoback = () => {
        navigation.goBack();
    };

    const handleMarkdownAction = (markdown) => {
        const cursorPosition = storyContent.length;
        const beforeText = storyContent.slice(0, cursorPosition);
        const afterText = storyContent.slice(cursorPosition);
        setStoryContent(`${beforeText}${markdown}${afterText}`);
    };

    const handleImageSelect = (uri) => {
        setSelectedImages((prev) => [...prev, uri]); // 새 이미지를 배열에 추가
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prev) => prev.filter((_, i) => i !== index)); // 특정 이미지 삭제
    };

    const handleSubmit = async () => {
        if (!storyContent.trim() && selectedImages.length === 0) {
            Alert.alert('오류', '내용 또는 이미지를 추가해주세요.');
            return;
        }

        const feedData = {
            title : "User Story",
            description : storyContent,
            imageUrls: selectedImages,
        }

        console.log(feedData);

        try {
            // API call to submit the feed data
            const response = await postFeed(feedData);
            console.log('API 응답:', response);

            // Success feedback to the user
            Alert.alert('성공', '스토리가 성공적으로 업로드되었습니다.');
            navigation.goBack(); // Navigate back to the previous screen
        } catch (error) {
            console.error('스토리 업로드 실패:', error);
            Alert.alert('실패', '스토리 업로드에 실패했습니다.');
        }
    };

    const confirmSubmit = () => {
        Alert.alert(
            '작성 확인',
            '글을 업로드 하시겠습니까?',
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '확인',
                    onPress: handleSubmit, // 확인 버튼 누르면 handleSubmit 실행
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <style.TotalMainContainer>
            <style.TotalWrapper>
                <style.MenuWrapper>
                    <style.GoBackButton onPress={handleGoback}>
                        <style.GoBackImage source={leftImage} />
                    </style.GoBackButton>
                    <style.SubmitButton onPress={ confirmSubmit }>
                        <style.SubmitButtonText>
                            작성 완료
                        </style.SubmitButtonText>
                    </style.SubmitButton>
                </style.MenuWrapper>
                <style.UserImageWrapper>
                    <style.UserImage source={sampleUserProfileImg} />
                    <style.UserNameWrapper>
                        <style.UserName>{sampleUserName}</style.UserName>
                    </style.UserNameWrapper>
                </style.UserImageWrapper>

                <style.UserContentWrapper>
                    <style.UserContentWriteWrapper>
                        <InputField
                            value={storyContent}
                            onChangeText={setStoryContent}
                            placeholder="스토리를 입력하세요"
                            multiline
                        />
                        <MarkDownToolBar onAction={handleMarkdownAction} />
                    </style.UserContentWriteWrapper>

                    <style.UserContentImageWrapper>
                        <Icon name="image" size={20} color="gray" />
                        <ImageUploader onImageSelect={handleImageSelect} />
                    </style.UserContentImageWrapper>

                    <ScrollView horizontal style={styles.imageScrollContainer}>
                        {selectedImages.map((uri, index) => (
                            <View key={index} style={styles.imageContainer}>
                                <Image source={{ uri }} style={styles.image} />
                                <TouchableOpacity
                                    onPress={() => handleRemoveImage(index)}
                                    style={styles.deleteButton}
                                >
                                    <Icon name="trash" size={20} color="red" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </style.UserContentWrapper>
            </style.TotalWrapper>
        </style.TotalMainContainer>
    );
}

const styles = StyleSheet.create({
    imageScrollContainer: {
        marginVertical: 10,
        height: 100,
    },
    imageContainer: {
        position: 'relative',
        marginRight: 10,
        backgroundColor: '#fff',
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
    },
});

export default SNSStoryMain;
