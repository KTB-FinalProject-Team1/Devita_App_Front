import React, { useEffect } from 'react';
import { Linking, Text, View, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

function KakaoRedirectHandler() {
    const navigation = useNavigation();

    useEffect(() => {
        const handleDeepLink = async (event) => {
            const url = event.url;
            console.log('Redirected URL:', url);

            try {
                // URL에서 인증 코드 추출
                const queryParams = new URLSearchParams(url.split('?')[1]);
                const authCode = queryParams.get('code');

                if (!authCode) {
                    throw new Error('Authorization Code not found');
                }

                console.log('Authorization Code:', authCode);

                // 서버에 인증 코드 전달
                const response = await axios.post(`${BASE_URL}/api/v1/auth/kakao`, { code: authCode });

                if (response.status === 200) {
                    const { accessToken, refreshToken } = response.data;

                    // 토큰 저장
                    await AsyncStorage.setItem('accessToken', accessToken);
                    await AsyncStorage.setItem('refreshToken', refreshToken);

                    console.log('로그인 성공, 메인 페이지로 이동');
                    navigation.navigate('Main');
                } else {
                    throw new Error(`Login failed with status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error during token exchange:', error);
                Alert.alert('로그인 실패', '로그인 중 문제가 발생했습니다. 다시 시도해 주세요.');
            }
        };

        // URL 이벤트 리스너 추가
        Linking.addEventListener('url', handleDeepLink);

        // 초기 URL 확인
        Linking.getInitialURL().then((url) => {
            if (url) handleDeepLink({ url });
        });

        return () => {
            Linking.removeEventListener('url', handleDeepLink);
        };
    }, [navigation]);

    return (
        <View>
            <Text>로그인 처리 중입니다. 잠시만 기다려 주세요...</Text>
        </View>
    );
}

export default KakaoRedirectHandler;
