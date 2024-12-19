import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.main";
import Icon from 'react-native-vector-icons/FontAwesome';
import SNSFeed from "./SNS.feed";
import SNSStory from "./SNS.story";
import GetPosts from "../../api/GetPosts";
import ExSNS from "../../assets/DummyData/ExSNS";
import { useRecoilState } from 'recoil';
import { postsState } from '../../recoil/atoms'


function SNSPage() {
    const [posts, setPosts] = useRecoilState(postsState); // Recoil 상태 사용
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const onClickPlus = () => {
        navigation.navigate('SNSStoryWrite');
    };
    const onClickSearch = () => {
        navigation.navigate('SearchFriend');
    };
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await GetPosts();
            const content = response.content;
            setPosts(content); // Recoil 상태에 저장
            console.log('Posts 불러오기 성공:', content);
        } catch (error) {
            console.error('Posts 불러오기 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(); // 초기 호출

        {/*const interval = setInterval(() => {
            fetchPosts(); // 일정 시간마다 호출
        }, 30000); // 30초마다 호출

        return () => clearInterval(interval);*/}// 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (

        <style.TotalWrapper>
            <style.TitleWrapper>
                <style.TitleText>피드</style.TitleText>
                <style.SearchButton onPress={onClickSearch}>
                    <Icon name="search" size={20} color="gray" />
                </style.SearchButton>
            </style.TitleWrapper>
            <style.FeedWrapper
            >
                {posts.map((sns, index) => (
                    <SNSFeed key={index} sns={sns} />
                ))}

            </style.FeedWrapper>
            <style.StoryWrapper>
                {posts.map((sns, index) => (
                    <SNSStory key={index} sns={sns} />
                ))}

            </style.StoryWrapper>

            <style.TodoCategoryAddButton onPress={onClickPlus}>
                <style.TodoCategoryAddButtonText>+</style.TodoCategoryAddButtonText>
            </style.TodoCategoryAddButton>
        </style.TotalWrapper>
    );
}

export default SNSPage;
