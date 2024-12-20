import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.story";
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';
import profileImg1 from "../../assets/img/profile1.png";
import Post1 from "../../assets/img/Post1.png";
import Post2 from "../../assets/img/Post2.png";
import ImageComponent from "./ImageComponent";
import postLike from "../../api/PostLike";
import postUnlike from "../../api/PostUnlike"

function SNSStory({sns, refreshSnsData}) {
    const { writerNickname, writerImageUrl, description, images, likes, id, isLiked } = sns;
    console.log(writerImageUrl);
    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const toggleLike = async () => {
        try {
            if (!liked) {
                const response = await postLike(id);
                console.log('좋아요 응답:', response);
                setLikeCount((prev) => prev + 1); // 좋아요 카운트 증가
                alert('좋아요 완료');
            } else {
                const response = await postUnlike(id);
                console.log('좋아요 취소 응답:', response);
                setLikeCount((prev) => prev - 1); // 좋아요 카운트 감소
                alert('좋아요 취소 완료');
            }

            setLiked((prev) => !prev);

            // 부모 컴포넌트의 refreshSnsData를 호출하여 최신 데이터를 가져옴
            refreshSnsData();
        } catch (error) {
            console.error(liked ? '좋아요 취소 실패:' : '좋아요 실패:', error);
            alert(liked ? '좋아요 취소 요청에 실패했습니다.' : '좋아요 요청에 실패했습니다.');
        }
    };

    // 텍스트 제한
    const MAX_TEXT_LENGTH = 200;
    const displayedText =
        description.length > MAX_TEXT_LENGTH
            ? `${description.substring(0, MAX_TEXT_LENGTH)}...`
            : description;

    const handleNavigate = () => {
        navigation.navigate('SNSStoryMain', {sns});
    }

    return (
        <style.TotalStoryContainer>
            <style.TotalContainer>
                <style.UserImageWrapper>
                    <style.UserImage source={profileImg1}/>
                </style.UserImageWrapper>
                <style.UserContentWrapper>
                    <style.UserContentRealWrapper>

                        <style.UserNameWrapper>
                            <style.UserName>{writerNickname}</style.UserName>
                        </style.UserNameWrapper>
                        <style.UserTextWrapper>
                            <style.UserTextButton  onPress={handleNavigate}>
                                <Markdown>{displayedText}</Markdown>
                            </style.UserTextButton>
                        </style.UserTextWrapper>
                        <style.UserImagesContainer>
                            <style.UserImagesWrapper>
                                {images.map((imageSource, index) => (
                                    <ImageComponent key={index} source={{uri: imageSource}}/>
                                ))}
                            </style.UserImagesWrapper>
                        </style.UserImagesContainer>
                        <style.UserLikeWrapper>
                            <style.UserLike
                                onPress={toggleLike}
                                color={isLiked ? '#7DB1FF' : '#e9e9e9'}
                            >
                                <Icon
                                    name={isLiked ? 'heart' : 'heart-o'}
                                    size={15}
                                    color={isLiked ? 'white' : 'gray'}
                                />
                                <style.UserLikeText color={isLiked ? 'white' : 'gray'}>
                                    {likes}k
                                </style.UserLikeText>
                            </style.UserLike>
                        </style.UserLikeWrapper>
                    </style.UserContentRealWrapper>
                </style.UserContentWrapper>
            </style.TotalContainer>
        </style.TotalStoryContainer>
    );
}


export default SNSStory;
