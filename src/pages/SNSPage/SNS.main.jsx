import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.main";
import SNSFeed from "./SNS.feed";
import SNSStory from "./SNS.story";
import ExSNS from "../../assets/DummyData/ExSNS";


function SNSPage() {

    return (

        <style.TotalWrapper>
            <style.TitleWrapper>
                <style.TitleText>피드</style.TitleText>
            </style.TitleWrapper>
            <style.FeedWrapper
            >
                {ExSNS.map((sns, index) => (
                    <SNSFeed key={index} sns={sns} />
                ))}

            </style.FeedWrapper>
            <style.StoryWrapper>
                {ExSNS.map((sns, index) => (
                    <SNSStory key={index} sns={sns} />
                ))}

            </style.StoryWrapper>

            <style.TodoCategoryAddButton>
                <style.TodoCategoryAddButtonText>+</style.TodoCategoryAddButtonText>
            </style.TodoCategoryAddButton>
        </style.TotalWrapper>
    );
}

export default SNSPage;
