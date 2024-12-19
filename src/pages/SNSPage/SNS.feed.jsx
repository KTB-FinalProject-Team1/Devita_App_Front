import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.feed";
import profileImg1 from "../../assets/img/profile1.png"

function SNSFeed({sns}) {

    const { writerNickname, userProfileImg, description, images, likes } = sns;
    const navigation = useNavigation();

    const MAX_LENGTH = 18;
    const displayedText =
        description.length >MAX_LENGTH ?
            `${description.substring(0, MAX_LENGTH)}...` :
            description;

    const handleNavigate = () => {
        navigation.navigate('SNSStoryMain', {sns});
    }


    return (
        <style.TotalButtonContainer onPress={handleNavigate}>
            <style.TotalContainer>
                <style.UserImageWrapper>
                    <style.UserImage source={profileImg1} />
                </style.UserImageWrapper>
                <style.ContentWrapper>
                    <style.UserName>{writerNickname}</style.UserName>
                    <style.UserContent>{displayedText}</style.UserContent>
                </style.ContentWrapper>

            </style.TotalContainer>
        </style.TotalButtonContainer>

    );
}

export default SNSFeed;
