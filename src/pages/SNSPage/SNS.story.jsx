import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.story";
import Icon from 'react-native-vector-icons/FontAwesome';
import profileImg1 from "../../assets/img/profile1.png";
import Post1 from "../../assets/img/Post1.png";
import Post2 from "../../assets/img/Post2.png";
import ImageComponent from "./ImageComponent";

function SNSStory({sns}) {
    const { userName, userProfileImg, userText, userImages, userLikes } = sns;
    const images = [Post1, Post2, Post1];
    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked((prev) => !prev);
    };

    // 텍스트 제한
    const MAX_TEXT_LENGTH = 200;
    const displayedText =
        userText.length > MAX_TEXT_LENGTH
            ? `${userText.substring(0, MAX_TEXT_LENGTH)}...`
            : userText;

    const handleNavigate = () => {
        navigation.navigate('SNSStoryMain', {sns});
    }

    return (
        <style.TotalStoryContainer>
            <style.TotalContainer>
                <style.UserImageWrapper>
                    <style.UserImage source={userProfileImg} />
                </style.UserImageWrapper>
                <style.UserContentWrapper>
                    <style.UserNameWrapper>
                        <style.UserName>{userName}</style.UserName>
                    </style.UserNameWrapper>
                    <style.UserTextWrapper onPress={handleNavigate}>
                        <style.UserText>{displayedText}</style.UserText>
                    </style.UserTextWrapper>
                    <style.UserImagesContainer>
                        <style.UserImagesWrapper>
                            {userImages.map((imageSource, index) => (
                                <ImageComponent key={index} source={imageSource} />
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
                                {userLikes}k
                            </style.UserLikeText>
                        </style.UserLike>
                    </style.UserLikeWrapper>
                </style.UserContentWrapper>
            </style.TotalContainer>
        </style.TotalStoryContainer>
    );
}


export default SNSStory;
