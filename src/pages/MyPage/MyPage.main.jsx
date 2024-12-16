import React, { useState, useEffect } from 'react';
import * as style from './style/MyPage.main';
import { useNavigation } from "@react-navigation/native";
import CharacterFirst from './CharacterFirst';
import CharacterSecond from './CharacterSecond';
import { getCharacterInfo } from "../../api/GetCharacterInfo";
import { updateNutrition } from "../../api/UpdateNutrition";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import VitaminImg from '../../assets/img/Pill.png'

function MyPage() {
    const navigation = useNavigation();
    const [user, setUser] = useState(""); // 닉네임 저장
    const [experience, setExperience] = useState(null);
    const [vita, setVita] = useState(null);
    const handMoneyImg = require('../../assets/img/handMoney.png');

    const fetchCharacterInfo = async () => {
        try {
            const data = await getCharacterInfo();
            setExperience(data.experience);
            setVita(data.nutrition);
            console.log('캐릭터 정보', data);
        } catch (error) {
            setExperience(30);
            setVita(5);
            console.log('캐릭터 정보 불러오기 실패', error);
        }
    };

    const fetchUserNickname = async () => {
        try {
            const nickname = await AsyncStorage.getItem("userNickname");
            setUser(nickname || "사용자");
        } catch (error) {
            console.log('닉네임 불러오기 실패', error);
        }
    };

    useEffect(() => {
        fetchUserNickname();
        fetchCharacterInfo();
    }, []);

    const level = experience !== null ? Math.floor(experience / 100 + 1) : 1;
    const currentExperience = experience !== null ? experience % 100 : 0;
    const growthRate = (currentExperience / 100) * 100;
    const characterName = level === 1 ? '피곤한 개발자 지망생' : '신입사원 개발자';

    const handleClickSetting = () => {
        navigation.navigate("Setting");
    };

    const handleGiveVitamin = async () => {
        if (vita > 0) {
            setVita(vita - 1);
            setExperience(experience + 10);
            try {
                await updateNutrition();
                await fetchCharacterInfo();
            } catch (error) {
                console.log("영양제 업데이트 실패", error);
            }
        }
    };

    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.UserNameWrapper>
                        <style.Name>
                            {user}
                        </style.Name>
                </style.UserNameWrapper>

                <style.CharacterTotalWrapper>
                    {level === 1 ? <CharacterFirst/> : <CharacterSecond/>} {/* Conditional rendering */}
                </style.CharacterTotalWrapper>
                <style.CharacterDevelopWrapper>
                    <style.CharacterLevelWrapper>
                        <style.CharacterLevelTitleWrapper>
                            <style.CharacterLevel>레벨 {level}</style.CharacterLevel>
                            <style.CharacterNameWrapper>
                                <style.CharacterName>{characterName}</style.CharacterName>
                            </style.CharacterNameWrapper>
                            <style.Percent>{growthRate.toFixed(1)}%</style.Percent>
                        </style.CharacterLevelTitleWrapper>
                        <style.CharacterLevelBar>
                            <style.CharacterLevelBarInner dealt={growthRate} /> {/* Growth rate as percentage */}
                        </style.CharacterLevelBar>
                    </style.CharacterLevelWrapper>
                    <style.CharacterButtonWrapper>
                        <style.CharacterButton onPress={handleGiveVitamin}>
                            <style.CharacterButtonTextWrapper>
                                <style.CharacterButtonTitle>
                                    비타민 주기
                                </style.CharacterButtonTitle>
                                <style.CharacterButtonSubTitle>
                                    {vita} 개 남음
                                </style.CharacterButtonSubTitle>
                            </style.CharacterButtonTextWrapper>
                            <style.CharacterButtonImage source={VitaminImg}></style.CharacterButtonImage>
                        </style.CharacterButton>
                    </style.CharacterButtonWrapper>
                </style.CharacterDevelopWrapper>
            </style.Wrapper>
        </style.TotalWrapper>
    );
}

export default MyPage;
