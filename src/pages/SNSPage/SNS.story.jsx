import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.story";
import Icon from 'react-native-vector-icons/FontAwesome';
import profileImg1 from "../../assets/img/profile1.png";
import Post1 from "../../assets/img/Post1.png";
import Post2 from "../../assets/img/Post2.png";
import ImageComponent from "./ImageComponent";
import postLike from "../../api/PostLike";
import deleteLike from "../../api/DeleteLike";

function SNSStory({sns}) {
    const { writerNickname, writerImageUrl, description, images, likes, id } = sns;
    console.log(writerImageUrl);
    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);
    const toggleLike = async () => {
        try {
            if (!liked) {
                // 현재 좋아요 상태가 false인 경우, 좋아요 요청 실행
                const response = await postLike(id); // sns.id는 게시물의 고유 ID
                console.log('좋아요 응답:', response);
                alert('좋아요 완료');
            } else {
                // 현재 좋아요 상태가 true인 경우, 좋아요 취소 요청 실행
                const response = await deleteLike(id); // sns.id는 게시물의 고유 ID
                console.log('좋아요 취소 응답:', response);
                alert('좋아요 취소 완료');
            }

            // 상태 토글
            setLiked((prev) => !prev);
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
                <style.UserNameWrapper>
                        <style.UserName>{writerNickname}</style.UserName>
                    </style.UserNameWrapper>
                    <style.UserTextWrapper onPress={handleNavigate}>
                        <style.UserText>{displayedText}</style.UserText>
                    </style.UserTextWrapper>
                    <style.UserImagesContainer>
                        <style.UserImagesWrapper>
                            {images.map((imageSource, index) => (
                                <ImageComponent key={index} source={{ uri: imageSource }} />
                            ))}
                        </style.UserImagesWrapper>
                    </style.UserImagesContainer>
                    <style.UserLikeWrapper>
                        <style.UserLike
                            onPress={toggleLike}
                            color={liked ? '#7DB1FF' : '#e9e9e9'}
                        >
                            <Icon
                                name={liked ? 'heart' : 'heart-o'}
                                size={15}
                                color={liked ? 'white' : 'gray'}
                            />
                            <style.UserLikeText color={liked ? 'white' : 'gray'}>
                                {likes}k
                            </style.UserLikeText>
                        </style.UserLike>
                    </style.UserLikeWrapper>
                </style.UserContentWrapper>
            </style.TotalContainer>
        </style.TotalStoryContainer>
    );
}


export default SNSStory;
