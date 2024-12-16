import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomePage from '../../pages/HomePage/Home.main';
import AIPage from "../../pages/AIPage/AI.main";
import MyPage from "../../pages/MyPage/MyPage.main";
import SNSPage from "../../pages/SNSPage/SNS.main";
const activeColor = '#7DB1FF';
const inactiveColor = '#9e9e9e';

const Tab = createBottomTabNavigator();

// 스타일 컴포넌트
export const TabIcon = styled.View`
  margin-bottom: 5px;
`;

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#F2F2F2',
                    height: 55,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,

                },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconColor = focused ? activeColor : inactiveColor;

                    switch (route.name) {
                        case '홈':
                            iconName = 'home';
                            break;
                        case 'AI미션':
                            iconName = 'flag';
                            break;
                        case '피드':
                            iconName = 'instagram';
                            break;
                        case '마이':
                            iconName = 'user';
                            break;
                        default:
                            iconName = 'home';
                    }

                    return (
                        <TabIcon>
                            <Icon name={iconName} size={22} color={iconColor} />
                        </TabIcon>
                    );
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    color: inactiveColor,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="홈" component={HomePage} />
            <Tab.Screen name="AI미션" component={AIPage} />
            <Tab.Screen name="피드" component={SNSPage} />
            <Tab.Screen name="마이" component={MyPage} />
        </Tab.Navigator>
    );
};

export default TabBar;
