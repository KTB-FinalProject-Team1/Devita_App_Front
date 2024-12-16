import React, { useEffect } from 'react';
import { Linking, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@env';

function KakaoRedirectHandler() {
    const navigation = useNavigation();

    useEffect(() => {
        const handleDeepLink = async (event) => {
            const url = event.url; // 리다이렉트된 URL
            console.log('Redirected URL:', url);

            // URL에서 쿼리 파라미터 추출
            const queryParams = Linking.parse(url).queryParams;
            const authCode = queryParams?.code; // AUTHORIZATION_CODE 추출

            if (authCode) {
                console.log('Authorization Code:', authCode);

                try {
                    // 서버에 인증 코드 전달
                    const response = await axios.post(`${BASE_URL}/api/v1/auth/kakao`, { code: authCode });

                    if (response.status === 200) {
                        const { accessToken, refreshToken } = response.data;

                        // 토큰 저장 (예: SecureStore 또는 AsyncStorage 사용)
                        await AsyncStorage.setItem('accessToken', accessToken);
                        await AsyncStorage.setItem('refreshToken', refreshToken);

                        console.log('로그인 성공, 메인 페이지로 이동');
                        navigation.navigate('Main'); // 메인 페이지로 이동
                    } else {
                        console.error('로그인 실패:', response.status);
                    }
                } catch (error) {
                    console.error('Error during token exchange:', error);
                }
            } else {
                console.error('Authorization Code not found in URL');
            }
        };

        // URL 이벤트 리스너 추가
        Linking.addEventListener('url', handleDeepLink);

        // 초기 실행 시 URL 확인
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
