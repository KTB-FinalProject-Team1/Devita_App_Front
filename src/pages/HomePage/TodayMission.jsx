import React, { useState } from 'react';
import * as style from './style/TodayMission';
import { useNavigation } from '@react-navigation/native';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { Text } from "react-native";

const TodayMission = ({ initialOpen = true }) => {
    console.log('TodayMission initialOpen:', initialOpen);
    const [isOpen, setIsOpen] = useState(initialOpen);
    const navigation = useNavigation();
    const targetImg = require('../../assets/img/target2.png');
    const handleNavigate = () => {
        navigation.navigate('TodayMissionCheck');
    };


    return (
        <style.TodayMissionTotalWrapper>
            <style.TargetImg source={targetImg} />
            <style.TodayMissionTitle>오늘의 미션 확인하기</style.TodayMissionTitle>
                <style.TodayMissionExplain>
                    오늘의 미션을 수행하고 보상을 받으세요!
                </style.TodayMissionExplain>
            <ButtonBlue width={'90%'} height={'56px'} onPress={handleNavigate} >
                <Text>오늘의 미션 확인하기</Text>
            </ButtonBlue>
        </style.TodayMissionTotalWrapper>
    );
};

export default TodayMission;
