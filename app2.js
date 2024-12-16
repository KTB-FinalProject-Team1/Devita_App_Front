import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import * as Linking from 'expo-linking';
import TabBar from './src/components/TapBar/TapBar';
import TodayMissionCheck from "./src/pages/HomePage/TodayMissionCheck";
import KakaoLoginMain from "./src/pages/LoginPage/KakaoLogin.main";
import KakaoLogin from "./src/pages/LoginPage/KakaoLogin";
import KakaoRedirect from "./src/pages/LoginPage/KakaoRedirectHandler";
import SNSStory from "./src/pages/SNSPage/SNS.story";
import SNSStoryMain from "./src/pages/SNSPage/SNS.story.main";

// 테마 설정
const theme = {
    colors: {
        primary: '#6200ea',
        background: '#f5f5f5',
        tabBackground: '#F2F2F2',
    },
};
const linking = {
    prefixes: ['devita_app://'],
    config: {
        screens: {
            KakaoLogin: 'oauth', // URL의 path
            Main: 'main',
            TodayMissionCheck: 'mission',
            SNSStory: 'sns/story',
            SNSStoryMain: 'sns/story/main',
        },
    },
};

// 스택 네비게이터 생성
const Stack = createStackNavigator();

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer linking={linking}>
                <ThemeProvider theme={theme}>
                    <SafeAreaView style={styles.container}>
                        <Stack.Navigator
                            initialRouteName="Main"
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
                            <Stack.Screen name="Main" component={TabBar} />
                            <Stack.Screen name="TodayMissionCheck" component={TodayMissionCheck} />
                            <Stack.Screen name="SNSStory" component={SNSStory} />
                            <Stack.Screen name="SNSStoryMain" component={SNSStoryMain} />
                        </Stack.Navigator>
                    </SafeAreaView>
                </ThemeProvider>
            </NavigationContainer>
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingBottom: 56,
    },
});
