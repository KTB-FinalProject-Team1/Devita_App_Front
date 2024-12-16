import styled from 'styled-components/native';
import { Animated } from 'react-native';

// 전체 래퍼
export const TodayMissionTotalWrapper = styled.View`
    width: 90%;
    height: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
`;
export const TargetImg = styled.Image`
    width: 80px;
    height: 80px;
`
// 타이틀 텍스트
export const TodayMissionTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
`;
export const TodayMissionExplain = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: gray;
    margin-top: 10px;
    margin-bottom: 10px;
`;

// 미션 래퍼에 Animated 적용
export const AnimatedWrapper = styled(Animated.View)`
    width: 85%;
    height: 50px;
    border-radius: 20px;
    margin-top: 5px;
`;

// 미션 텍스트
export const TodayMissionText = styled.Text`
    font-size: 13px;
    font-weight: bold;
`;


// 버튼
export const TodayMissionButton = styled.TouchableOpacity``;
