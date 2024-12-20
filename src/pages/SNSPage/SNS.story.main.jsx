import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.story.main";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Markdown from 'react-native-markdown-display';
import profileImg1 from "../../assets/img/profile1.png";
import leftImage from "../../assets/img/left.png";
import ImageComponent from "./ImageComponent";
const userProfileImg1 = require("../../assets/img/profile1.png");
import postFollow from "../../api/PostFollow";
import deleteFollow from "../../api/DeleteFollow";
import postLike from "../../api/PostLike";
import deleteLike from "../../api/DeleteLike";


function SNSStoryMain({ route }) {
    const { sns } = route.params;
    const [liked, setLiked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [nowUser, setNowUser] = useState(""); // 초기값 설정
    const navigation = useNavigation();

    useEffect(() => {
        const fetchNowUser = async () => {
            try {
                const storedNickname = await AsyncStorage.getItem("nickname");
                setNowUser(storedNickname || ""); // nickname 설정
            } catch (error) {
                console.error("AsyncStorage nickname 가져오기 실패:", error);
            }
        };

        fetchNowUser();
    }, []);

    console.log("나", nowUser, sns.writerNickname, nowUser === sns.writerNickname);



    const toggleLike = async () => {
        try {
            if (!liked) {
                // 현재 좋아요 상태가 false인 경우, 좋아요 요청 실행
                const response = await postLike(sns.id); // sns.id는 게시물의 고유 ID
                console.log('좋아요 응답:', response);
                alert('좋아요 완료');
            } else {
                // 현재 좋아요 상태가 true인 경우, 좋아요 취소 요청 실행
                const response = await deleteLike(sns.id); // sns.id는 게시물의 고유 ID
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
    const toggleFollow = async () => {
        try {
            if (!isFollowing) {
                // 현재 팔로우 상태가 false인 경우, 팔로우 요청 실행
                const response = await postFollow(sns.writerId);
                console.log('팔로우 응답:', response);
                alert('팔로우 완료');
            } else {
                // 현재 팔로우 상태가 true인 경우, 언팔로우 요청 실행
                const response = await deleteFollow(sns.writerId);
                console.log('언팔로우 응답:', response);
                alert('언팔로우 완료');
            }

            // 상태 토글
            setIsFollowing((prev) => !prev);
        } catch (error) {
            console.error(isFollowing ? '언팔로우 실패:' : '팔로우 실패:', error);
            alert(isFollowing ? '언팔로우 요청에 실패했습니다.' : '팔로우 요청에 실패했습니다.');
        }
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
                    <style.UserImage source={userProfileImg1}/>
                    <style.UserNameWrapper>
                        <style.UserName>{sns.writerNickname}</style.UserName>
                    </style.UserNameWrapper>
                    {sns?.writerNickname !== nowUser && (
                        <style.FollowButton
                            onPress={toggleFollow}
                            style={{
                                backgroundColor: sns?.isFollowed ? '#7DB1FF' : '#e9e9e9',
                            }}
                        >
                            <style.FollowText
                                style={{
                                    color: sns?.isFollowed ? 'white' : 'gray',
                                }}
                            >
                                {sns?.isFollowed ? '팔로잉' : '팔로우'}
                            </style.FollowText>
                        </style.FollowButton>
                    )}

                </style.UserImageWrapper>
                <style.UserContentWrapper>
                    <style.UserTextWrapper>
                        <Markdown>{sns.description}</Markdown>
                    </style.UserTextWrapper>
                    <style.UserImagesContainer>
                        <style.UserImagesWrapper>
                            {sns.images.map((imageSource, index) => (
                                    <ImageComponent key={index} source={{ uri: imageSource }} />
                            ))}
                        </style.UserImagesWrapper>
                    </style.UserImagesContainer>
                    <style.UserLikeWrapper>
                        <style.UserLike
                            onPress={toggleLike}
                            color={sns.isLiked ? '#7DB1FF' : '#e9e9e9'}
                        >
                            <Icon
                                name={sns.isLiked ? 'heart' : 'heart-o'}
                                size={15}
                                color={sns.isLiked ? 'white' : 'gray'}
                            />
                            <style.UserLikeText color={sns.isLiked ? 'white' : 'gray'}>
                                {sns.likes}k
                            </style.UserLikeText>
                        </style.UserLike>
                    </style.UserLikeWrapper>
                </style.UserContentWrapper>
            </style.TotalWrapper>
        </style.TotalMainContainer>
    );
}


export default SNSStoryMain;
