import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SNS.main";
import Icon from 'react-native-vector-icons/FontAwesome';
import SNSFeed from "./SNS.feed";
import SNSStory from "./SNS.story";
import GetPosts from "../../api/GetPosts";
import { useRecoilState } from 'recoil';
import { friendPostsState } from '../../recoil/atoms'
import { postsState } from '../../recoil/atoms'
import getFriendsPost from "../../api/GetFriendsPost";


function SNSPage() {
    const [posts, setPosts] = useRecoilState(postsState); // Recoil 상태 사용
    const [friendPosts, setFriendPosts] = useRecoilState(friendPostsState);
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
    // 친구 게시물 가져오기
    const fetchFriendPosts = async () => {
        setLoading(true);
        try {
            const response = await getFriendsPost();
            const content = response.content;
            setFriendPosts(content); // 친구 게시물 상태에 저장
            console.log('Friend Posts 불러오기 성공:', content);
        } catch (error) {
            console.error('Friend Posts 불러오기 실패:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchPosts();
        fetchFriendPosts();
    }, []);

    const refreshSnsData = () => {
        fetchPosts();
        fetchFriendPosts();// 최신 데이터 갱신
    };

    return (

        <style.TotalWrapper>
            <style.TitleWrapper>
                <style.TitleText>피드</style.TitleText>
                <style.SearchButton onPress={onClickSearch}>
                    <Icon name="search" size={20} color="gray"/>
                </style.SearchButton>
            </style.TitleWrapper>
            <style.FeedWrapper
            >
                {friendPosts.map((sns, index) => (
                    <SNSFeed key={index} sns={sns}/>
                ))}

            </style.FeedWrapper>
            <style.StoryWrapper>
                {posts.map((sns, index) => (
                    <SNSStory key={index} sns={sns} refreshSnsData={refreshSnsData}/>
                ))}
            </style.StoryWrapper>

            <style.TodoCategoryAddButton onPress={onClickPlus}>
                <style.TodoCategoryAddButtonText>+</style.TodoCategoryAddButtonText>
            </style.TodoCategoryAddButton>
        </style.TotalWrapper>
    );
}

export default SNSPage;
