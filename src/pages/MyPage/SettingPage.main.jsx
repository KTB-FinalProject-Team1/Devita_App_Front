import React from 'react';
import * as style from './style/SettingPage.main';
import { useNavigation } from "@react-navigation/native";


function SettingPage() {
    const navigation = useNavigation();


    return(

        <style.TotalWrapper>
            <style.Wrapper>
                <style.ChangeWrapper
                    onClick={() => {
                        navigation('/settingnickname');
                    }}>
                    <style.ChangeTitle>
                        닉네임 변경
                    </style.ChangeTitle>
                    <style.ChangeTitle>{'>'}</style.ChangeTitle>
                </style.ChangeWrapper>
                <style.ChangeWrapper
                    onClick={() => {
                        navigation('/settingstack');
                    }}
                 >
                    <style.ChangeTitle>
                        개발 역량 설정
                    </style.ChangeTitle>
                    <style.ChangeTitle>{'>'}</style.ChangeTitle>
                </style.ChangeWrapper>


            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default SettingPage;
