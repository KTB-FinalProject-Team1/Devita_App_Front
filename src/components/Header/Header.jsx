import React, { useEffect, useState } from "react";
import * as style from "./style/Header";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode"; // jwtDecode를 default로 임포트
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

export const Header = ({ color, background, title, isBack }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const navigation = useNavigation();

    // 토큰 유효성 검증 함수
    const checkTokenValidity = async () => {
        try {
            const token = await AsyncStorage.getItem("accessToken");
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            const decoded = jwtDecode(token); // 토큰 디코딩
            const currentTime = Math.floor(Date.now() / 1000); // 현재 시간(초)

            if (decoded.exp < currentTime) {
                // 토큰이 만료되었을 경우
                await AsyncStorage.removeItem("accessToken"); // 만료된 토큰 삭제
                setIsAuthenticated(false);
            } else {
                // 토큰이 유효할 경우
                const nickname = await AsyncStorage.getItem("userNickname");
                setUsername(decoded.username || "한주리"); // 토큰에서 username 추출
                setUserNickname(nickname || "사용자");
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Invalid token:", error);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkTokenValidity();
    }, []);

    const handleClickLogin = () => {
        navigation.navigate("Login"); // React Navigation에서 화면 전환
    };

    return (
        <style.Layout color={color} background={background}>
            <style.Logo>
                <style.LogoText>{title}</style.LogoText>
            </style.Logo>
            {isBack && (
                <style.BackIcon
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            )}
            {isAuthenticated ? (
                <style.LoginButtonWrapper>
                    <style.LoginButtonName>{userNickname}</style.LoginButtonName>
                    <Text>님 환영합니다</Text>
                </style.LoginButtonWrapper>
            ) : (
                <style.LoginButton onPress={handleClickLogin}>
                    <Text>로그인 해주세요</Text>
                </style.LoginButton>
            )}
        </style.Layout>
    );
};

export default Header;
