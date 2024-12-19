import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/AI.main";
import { Text } from 'react-native';
import CategoryData from "../../assets/DummyData/Category";
import  getFreeMission  from "../../api/PostGetFreeMission";
import postSetFreeMission from "../../api/PostSetFreeMission";
import reset from "../../assets/img/reset.png";

function AIPage() {
    const [selectedTopCategory, setSelectedTopCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [isGenerated, setIsGenerated] = useState(false);
    const [freeMissions, setFreeMissions] = useState([]);
    const [selectedMission, setSelectedMission] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    // 애니메이션 값
    const topCategoryAnimation = useRef(new Animated.Value(0)).current;
    const subCategoryAnimation = useRef(new Animated.Value(0)).current;

    // TopCategory 애니메이션 효과
    const animateTopCategory = () => {
        Animated.timing(topCategoryAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    // SubCategory 애니메이션 효과
    const animateSubCategory = () => {
        Animated.timing(subCategoryAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const animatedTopCategoryStyle = {
        opacity: topCategoryAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        transform: [
            {
                scale: topCategoryAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                }),
            },
        ],
    };

    const animatedSubCategoryStyle = {
        opacity: subCategoryAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        transform: [
            {
                scale: subCategoryAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                }),
            },
        ],
    };

    const handleTopCategorySelect = (category) => {
        setSelectedTopCategory(category);
        setSubCategories(CategoryData.find((item) => item.name === category)?.subcategories || []);
        setSelectedSubCategory(null);
        setIsGenerated(false);
        animateTopCategory(); // TopCategory 애니메이션 실행
    };

    const handleSubCategorySelect = (subcategory) => {
        setSelectedSubCategory(subcategory);
        animateSubCategory(); // SubCategory 애니메이션 실행
    };

    const handleGenerateButtonClick = async () => {
        if (selectedTopCategory && selectedSubCategory) {
            setIsLoading(true);
            try {
                const response = await getFreeMission(selectedSubCategory);
                setFreeMissions(response.data || []);
                setIsGenerated(true);
            } catch (error) {
                console.error("Error generating mission:", error);
                // 에러 발생 시 기본 데이터로 설정
                setFreeMissions([
                    { level: 1, missionTitle: "Default Mission 1" },
                    { level: 2, missionTitle: "Default Mission 2" },
                    { level: 3, missionTitle: "Default Mission 3" },
                ]);
                setIsGenerated(true);
            } finally {
                setTimeout(() => setIsLoading(false), 2000);
            }
        } else {
            alert("Please select a category first!");
        }
    };
    const handleMissionClick = (mission) => {
        setSelectedMission(mission);
    };

    const handleMissionAdd = async () => {
        if (selectedMission) {
            try {
                await postSetFreeMission(selectedMission.missionTitle);
                alert("Mission successfully added!");
                navigation.navigate("Main");
            } catch (error) {
                console.error("Failed to add mission:", error);
            }
        } else {
            alert("Please select a mission first!");
        }
    };
    const handleReload = () => {
        setSelectedTopCategory(null);
        setSelectedSubCategory(null);
        setSubCategories([]);
        setIsGenerated(false);
        setFreeMissions([]);
        setSelectedMission(null);
        setIsLoading(false);
        topCategoryAnimation.setValue(0);
        subCategoryAnimation.setValue(0);
    }

    return (
        <style.TotalWrapper>
            <style.ReloadButtonWrapper>
                <style.ReloadButton onPress={handleReload}>
                    <style.ReloadImage source={reset}></style.ReloadImage>
                </style.ReloadButton>
            </style.ReloadButtonWrapper>
            <style.SubAIWrapper>
                <style.TopCategoryWrapper>
                    <style.ExplainWrapper>
                        <style.ExplainText>분류를 선택해 주세요!</style.ExplainText>
                    </style.ExplainWrapper>
                    <style.TopCategorySelectInner>
                        {selectedTopCategory === null ? (
                            CategoryData.map((item) => (
                                <style.TopCategoryButton
                                    key={item.name}
                                    onPress={() => handleTopCategorySelect(item.name)}
                                >
                                    <style.TopCategoryText>{item.name}</style.TopCategoryText>
                                </style.TopCategoryButton>
                            ))
                        ) : (
                            <Animated.View style={animatedTopCategoryStyle}>
                                <style.TopCategorySelected>
                                    <style.TopCategorySelectedText>
                                        {selectedTopCategory}
                                    </style.TopCategorySelectedText>
                                </style.TopCategorySelected>
                            </Animated.View>
                        )}
                    </style.TopCategorySelectInner>
                </style.TopCategoryWrapper>

                {subCategories.length > 0 && (
                    <style.SubCategoryWrapper>
                        <style.ExplainWrapper>
                            <style.ExplainText>하위 분류를 선택해 주세요!</style.ExplainText>
                        </style.ExplainWrapper>
                        <style.SubCategorySelectWrapper>
                            {selectedSubCategory === null
                                ? subCategories.map((item, index) => (
                                    <style.SubCategoryButton
                                        key={`${selectedTopCategory}-${index}`}
                                        onPress={() => handleSubCategorySelect(item)}
                                    >
                                        <style.TopCategoryText>{item}</style.TopCategoryText>
                                    </style.SubCategoryButton>
                                ))
                                : (
                                    <Animated.View style={animatedSubCategoryStyle}>
                                        <style.TopCategorySelected>
                                            <style.TopCategorySelectedText>
                                                {selectedSubCategory}
                                            </style.TopCategorySelectedText>
                                        </style.TopCategorySelected>
                                    </Animated.View>
                                )}
                        </style.SubCategorySelectWrapper>
                    </style.SubCategoryWrapper>
                )}
                {selectedSubCategory && (
                    <style.GenerateButtonWrapper>
                        <style.GenerateButton onPress={handleGenerateButtonClick}>
                            <style.GenerateButtonText>미션 생성하기</style.GenerateButtonText>
                        </style.GenerateButton>
                    </style.GenerateButtonWrapper>
                )}
                {isLoading ? (
                    <style.LoadingWrapper>
                        <style.LoadingText>로딩중...</style.LoadingText>
                    </style.LoadingWrapper>
                ) : isGenerated ? (
                    <style.MissionWrapper>
                        <style.MissionSelectWrapper>
                            {freeMissions.map((mission, index) => (
                                <style.MissionEachWrapper
                                    key={index}
                                    level={mission.level}
                                    selected={selectedMission === mission}
                                    onPress={() => handleMissionClick(mission)}
                                >
                                    <style.MissionEachText>{mission.missionTitle}</style.MissionEachText>
                                </style.MissionEachWrapper>
                            ))}
                        </style.MissionSelectWrapper>
                        <style.MissionSelectButtonWrapper>
                            <style.GenerateButton onPress={handleGenerateButtonClick}>
                                <style.GenerateButtonText>다시 생성하기</style.GenerateButtonText>
                            </style.GenerateButton>
                            <style.GenerateButton onPress={handleMissionAdd}>
                                <style.GenerateButtonText>투두에 추가하기</style.GenerateButtonText>
                            </style.GenerateButton>
                        </style.MissionSelectButtonWrapper>
                    </style.MissionWrapper>
                ) : null}
            </style.SubAIWrapper>
        </style.TotalWrapper>
    );
}

export default AIPage;
