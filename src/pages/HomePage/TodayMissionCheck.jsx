import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getTodayMission } from "../../api/GetTodayMission";

function TodayMissionCheck() {
    const [mission, setMission] = useState("기본 미션: 알고리즘 문제 풀기");
    const [isLoading, setIsLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    const navigation = useNavigation();

    useEffect(() => {
        const fetchTodayMission = async () => {
            try {
                const data = await getTodayMission();
                setMission(data?.missionTitle || "기본 미션");
            } catch (error) {
                console.log("미션 호출 실패:", error);
                setMission("WebSocket 통신 방식 이해하기");
            }
        };
        setTimeout(() => {
            setIsLoading(false);
            fetchTodayMission();
        }, 4000);
                // 애니메이션 시작
        Animated.parallel([
            Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),
            Animated.spring(scaleAnim, {
                        toValue: 1,
                        friction: 5,
                        useNativeDriver: true,
                    }),
                ]).start();

    }, []);

    return (
        <View style={styles.totalWrapper}>
            {isLoading ? (
                <Animated.View
                    style={[
                        styles.loadingWrapper,
                        { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
                    ]}
                >
                    <Image source={require("../../assets/img/envelop2png.png")} style={styles.loadingImg} />
                    <Text style={styles.infoText}>오늘의 미션 생성 중...</Text>
                </Animated.View>
            ) : (
                <>
                    <Animated.View
                        style={[
                            styles.missionWrapper,
                            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
                        ]}
                    >
                        <Text style={styles.missionTextTitle}>오늘의 미션</Text>
                        <Text style={styles.missionText}>
                            {mission}
                        </Text>
                    </Animated.View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>홈으로 돌아가기</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

export default TodayMissionCheck;

const styles = StyleSheet.create({
    totalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6E6FF',
    },
    loadingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingImg: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    missionWrapper: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 20,
    },
    missionTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    missionText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    button: {
        width: '60%',
        height: 45,
        backgroundColor: '#7DB1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
