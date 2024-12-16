import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.story.main";
import Icon from 'react-native-vector-icons/FontAwesome';
import profileImg1 from "../../assets/img/profile1.png";
import leftImage from "../../assets/img/left.png";
import ImageComponent from "./ImageComponent";

function SNSStoryMain({ route }) {
    const { sns } = route.params;
    const [liked, setLiked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const navigation = useNavigation();


    const toggleLike = () => {
        setLiked((prev) => !prev);
    };
    const toggleFollow = () => {
        setIsFollowing((prev) => !prev);
    };
    const handleGoback = () => {
        navigation.goBack();
    }

    // 전체 텍스트

    return (
        <style.TotalMainContainer>
            <style.TotalWrapper>
                <style.MenuWrapper>
                    <style.GoBackButton onPress={handleGoback}>
                        <style.GoBackImage source={leftImage}/>
                    </style.GoBackButton>
                </style.MenuWrapper>
                <style.UserImageWrapper>
                    <style.UserImage source={sns.userProfileImg}/>
                    <style.UserNameWrapper>
                        <style.UserName>{sns.userName}</style.UserName>
                    </style.UserNameWrapper>
                    <style.FollowButton onPress={toggleFollow} color={isFollowing ? '#7DB1FF' : '#e9e9e9'}>
                        <style.FollowText color={isFollowing? 'white':'gray'}>{isFollowing ? '팔로잉' : '팔로우'}</style.FollowText>
                    </style.FollowButton>
                </style.UserImageWrapper>
                <style.UserContentWrapper>
                    <style.UserTextWrapper>
                        <style.UserText>{sns.userText}</style.UserText>
                    </style.UserTextWrapper>
                    <style.UserImagesContainer>
                        <style.UserImagesWrapper>
                            {sns.userImages.map((imageSource, index) => (
                                console.log(imageSource),
                                    <ImageComponent key={index} source={imageSource} height={200}/>
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
                                {sns.userLikes}k
                            </style.UserLikeText>
                        </style.UserLike>
                    </style.UserLikeWrapper>
                </style.UserContentWrapper>
            </style.TotalWrapper>
        </style.TotalMainContainer>
    );
}


export default SNSStoryMain;
