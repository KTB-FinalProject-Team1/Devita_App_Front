import React, { useState, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from "./style/SearchFriend";
import Icon from 'react-native-vector-icons/FontAwesome';
import ExSNS from "../../assets/DummyData/ExSNS";
import leftImage from "../../assets/img/left.png";


function SNSPage() {

    const navigation = useNavigation();

    const onClickPlus = () => {
        navigation.navigate('SNSStoryWrite')
    }

    const handleGoback = () => {
        navigation.goBack();
    }

    return (

        <style.TotalWrapper>
            <style.MenuWrapper>
                <style.GoBackButton onPress={handleGoback}>
                    <style.GoBackImage source={leftImage}/>
                </style.GoBackButton>
            </style.MenuWrapper>
        </style.TotalWrapper>
    );
}

export default SNSPage;
