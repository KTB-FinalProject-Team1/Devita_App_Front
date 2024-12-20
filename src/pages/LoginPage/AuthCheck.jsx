import React, { useEffect } from "react";
import { ActivityIndicator, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const AuthCheck = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const accessToken = await AsyncStorage.getItem("accessToken");
                if (accessToken) {
                    // 토큰 유효성 확인 (선택 사항)
                    const response = await axios.get(
                        "https://kapi.kakao.com/v1/user/access_token_info",
                        {
                            headers: { Authorization: `Bearer ${accessToken}` },
                        }
                    );

                    if (response.status === 200) {
                        console.log("유효한 토큰:", accessToken);
                        navigation.navigate("onboardingstack"); // 메인 화면으로 이동
                        return;
                    }
                }

                // 토큰이 없거나 유효하지 않으면 로그인 화면으로 이동
                console.log("유효하지 않은 토큰. 로그인 필요.");
                await AsyncStorage.clear();
                navigation.navigate("KakaoLogin");
            } catch (error) {
                console.error("로그인 상태 확인 실패:", error);
                await AsyncStorage.clear();
                navigation.navigate("KakaoLogin");
            }
        };

        checkLoginStatus();
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#6200ea" />
        </View>
    );
};

export default AuthCheck;
