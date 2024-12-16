import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.feed";
import profileImg1 from "../../assets/img/profile1.png"

function SNSFeed({sns}) {

    const { userName, userProfileImg, userText, userImages, userLikes } = sns;
    const navigation = useNavigation();

    const MAX_LENGTH = 18;
    const displayedText =
        userText.length >MAX_LENGTH ?
            `${userText.substring(0, MAX_LENGTH)}...` :
            userText;

    const handleNavigate = () => {
        navigation.navigate('SNSStoryMain', {sns});
    }


    return (
        <style.TotalButtonContainer onPress={handleNavigate}>
            <style.TotalContainer>
                <style.UserImageWrapper>
                    <style.UserImage source={userProfileImg} />
                </style.UserImageWrapper>
                <style.ContentWrapper>
                    <style.UserName>{userName}</style.UserName>
                    <style.UserContent>{displayedText}</style.UserContent>
                </style.ContentWrapper>

            </style.TotalContainer>
        </style.TotalButtonContainer>

    );
}

export default SNSFeed;
