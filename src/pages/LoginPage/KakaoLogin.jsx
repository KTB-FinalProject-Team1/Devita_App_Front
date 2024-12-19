import React, { useState, useEffect} from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
console.log(BASE_URL);


const KakaoLoginWebView = ({ navigation }) => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3974cecc2e6156a32bfb904ff99de98e&redirect_uri=http://localhost:3000/callback`;


    const handleNavigationStateChange = async (event) => {
        const { url } = event;

        if (url.startsWith("http://localhost:3000/callback")) {
            const code = new URL(url).searchParams.get("code");
            console.log(code);
            if (code) {
                // 서버에 Authorization Code 전달
                const response = await axios.post(
                    `${BASE_URL}/api/v1/auth/user/info`,
                    { kakaoAccessToken: code }
                );
                const Infodata = response.data.data;


                // AsyncStorage에 저장
                if(response.status === 200) {
                    console.log('응답',Infodata);
                    console.log("AccessToken:", Infodata.accessToken);
                    console.log("RefreshToken:", Infodata.refreshToken);
                    console.log("Nickname:", Infodata.nickname);
                    await AsyncStorage.setItem("accessToken", Infodata.accessToken);
                    await AsyncStorage.setItem("refreshToken", Infodata.refreshToken);
                    await AsyncStorage.setItem("nickname", Infodata.nickname);
                    Alert.alert("로그인 성공");
                    navigation.navigate('onboardingstack');
                }else{
                    Alert.alert("로그인 실패", "로그인 실패.", );
                }
            } else {
                Alert.alert("로그인 실패", "Authorization Code를 찾을 수 없습니다.");
            }
        }
    };

    return (
        <WebView
            source={{ uri: KAKAO_AUTH_URL }}
            onNavigationStateChange={handleNavigationStateChange}
            startInLoadingState
            renderLoading={() => (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#6200ea" />
                </View>
            )}
        />
    );
};

export default KakaoLoginWebView;
