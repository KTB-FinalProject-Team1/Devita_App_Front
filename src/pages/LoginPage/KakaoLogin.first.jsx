import React, { useEffect } from 'react';
import { Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as style from "./style/Login.main";
import { useNavigation } from '@react-navigation/native';
import KakaoLogo from "../../assets/img/KakaoLogo.png";

function KakaoLoginFirst() {
    const navigation = useNavigation();


    const moveToLogin = () => {
        navigation.navigate('KakaoLogin');
    };

    const handleLogout = async () => {
        try {
            // 로그인 토큰 삭제
            await AsyncStorage.removeItem('accessToken');
            await AsyncStorage.removeItem('refreshToken');
            await AsyncStorage.removeItem('nickname');

            // 서버 로그아웃 API 호출 (필요한 경우)
            try {
                const token = await AsyncStorage.getItem('accessToken');
                if (token) {
                    await axios.post(
                        'http://localhost:8080/api/v1/auth/logout',
                        {},
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    console.log('서버 로그아웃 성공');
                }
            } catch (serverError) {
                console.error('서버 로그아웃 실패:', serverError);
            }

            Alert.alert('로그아웃 성공', '성공적으로 로그아웃되었습니다.');
        } catch (error) {
            console.error('로그아웃 실패:', error);
            Alert.alert('로그아웃 실패', '로그아웃 중 오류가 발생했습니다.');
        }
    };
    const unlinkKakaoAccount = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            if (!token) {
                throw new Error('토큰이 없습니다. 로그인 상태를 확인하세요.');
            }

            const response = await axios.post(
                'https://kapi.kakao.com/v1/user/unlink',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('카카오 연결 끊기 성공:', response.data);
            Alert.alert('연결 끊기 성공', '카카오 계정 연결이 해제되었습니다.');

            // AsyncStorage 초기화
            await AsyncStorage.clear();
            navigation.navigate('KakaoLogin'); // 로그인 화면으로 이동
        } catch (error) {
            console.error('카카오 연결 끊기 실패:', error);
            Alert.alert('연결 끊기 실패', '카카오 계정 연결 해제에 실패했습니다.');
        }
    };

    return (
        <style.Wrapper>
            <style.TitleWrapper>
                <style.SubTitle>비타민 섭취하듯</style.SubTitle>
                <style.SubTitle>좋은 개발 습관 형성을 위하여</style.SubTitle>
                <style.Logo>Devita</style.Logo>
            </style.TitleWrapper>

            <style.KakaoLoginWrapper onPress={moveToLogin}>
                <style.KakaoLogo source={KakaoLogo} alt="Kakao Logo" />
                <style.KakaoLoginText>카카오로 로그인하기</style.KakaoLoginText>
            </style.KakaoLoginWrapper>

            <Button title="로그아웃" onPress={handleLogout} color="#FF6347" />
            <Button title="카카오 연결 끊기" onPress={unlinkKakaoAccount} color="#FF6347" />
        </style.Wrapper>
    );
}

export default KakaoLoginFirst;
