import React, { useState } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { WebView } from "react-native-webview";

const KakaoLoginWebView = ({ navigation }) => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3974cecc2e6156a32bfb904ff99de98e&redirect_uri=http://localhost:3000/callback`;

    const handleNavigationStateChange = (event) => {
        const { url } = event;

        if (url.startsWith("http://localhost:3000/callback")) {
            // Redirect URI에서 Authorization Code 추출
            const code = new URL(url).searchParams.get("code");
            if (code) {
                Alert.alert("로그인 성공", `Authorization Code: ${code}`);
                console.log("code:", code);
                // 서버로 Authorization Code 전달
                // 예: axios.post("http://your-server-url.com/kakao-auth", { code });
                navigation.navigate("Main", { token: code });
            } else {
                console.log("로그인 실패", "Authorization Code를 찾을 수 없습니다.");
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
