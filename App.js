import 'react-native-polyfill-globals/auto'; // Node.js 및 브라우저 API 폴리필
import 'react-native-get-random-values'; // UUID 사용 폴리필
import 'react-native-url-polyfill/auto'; // URL 지원 폴리필
import { Buffer } from 'buffer';
global.Buffer = Buffer;
import React, {useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import TabBar from './src/components/TapBar/TapBar';
import TodayMissionCheck from "./src/pages/HomePage/TodayMissionCheck";
import KakaoLoginFirst from "./src/pages/LoginPage/KakaoLogin.first";
import KakaoLogin from "./src/pages/LoginPage/KakaoLogin";
import SNSStory from "./src/pages/SNSPage/SNS.story";
import SNSStoryMain from "./src/pages/SNSPage/SNS.story.main";
import SNSStoryWrite from "./src/pages/SNSPage/SNS.write.jsx";
import SearchFriend from "./src/pages/SNSPage/SearchFriend";
import OnboardingInfo from "./src/pages/OnboardingPage/Onboarding.info";
import OnboardingNickname from "./src/pages/OnboardingPage/Onboarding.nickname";
import OnboardingStack from "./src/pages/OnboardingPage/Onboarding.stack";


// 테마 설정
const theme = {
    colors: {
        primary: '#6200ea',
        background: '#f5f5f5',
        tabBackground: '#F2F2F2',
    },
};
// 스택 네비게이터 생성
const Stack = createStackNavigator();

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Text>Something went wrong.</Text>;
        }
        return this.props.children;
    }
};

const clearStorageOnStart = async () => {
    try {
        await AsyncStorage.clear(); // 모든 데이터를 삭제
        console.log('AsyncStorage 초기화 완료: 자동 로그인 방지');
    } catch (error) {
        console.error('AsyncStorage 초기화 실패:', error);
    }
};



export default function App() {


    return (
        <RecoilRoot>
            <NavigationContainer>
                <ThemeProvider theme={theme}>
                    <SafeAreaView style={styles.container}>
                        <Stack.Navigator
                            initialRouteName="KakaoLoginFirst"
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen name="KakaoLoginFirst" component={KakaoLoginFirst} />
                            <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
                            <Stack.Screen name="Main" component={TabBar} />
                            <Stack.Screen name="TodayMissionCheck" component={TodayMissionCheck} />
                            <Stack.Screen name="SNSStory" component={SNSStory} />
                            <Stack.Screen name="SNSStoryMain" component={SNSStoryMain} />
                            <Stack.Screen name="SNSStoryWrite" component={SNSStoryWrite} />
                            <Stack.Screen name="SearchFriend" component={SearchFriend} />
                            <Stack.Screen name="onboardingstack" component={OnboardingStack} />
                            <Stack.Screen name="onbardingname" component={OnboardingNickname} />
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
