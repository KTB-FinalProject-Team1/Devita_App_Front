import React, {useState} from 'react';
import * as style from './style/Onboarding.main';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { useNavigation } from '@react-navigation/native';

function OnboardingNickname() {
    const [nickname, setNickname] = useState();
    const navigation = useNavigation();
    const handleConfirmClick = ()=>{
        console.log(nickname);
        navigation.navigate('onboardingstack');
    }
    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.TitleWrapper>
                    <style.Title>반가워요!</style.Title>
                    <style.Title>어떻게 불러드릴까요?</style.Title>
                </style.TitleWrapper>
                <style.NickNameWrapper>
                    <style.NickNameTitle>닉네임</style.NickNameTitle>
                    <style.NickNameInputWrapper>
                        <style.NickNameInput
                            type='text'
                            value={nickname}
                            onChange={(e)=>{ setNickname(e.target.value) }}
                            placeholder="닉네임을 입력해 주세요"
                        />
                    </style.NickNameInputWrapper>
                </style.NickNameWrapper>
                <ButtonBlue width={'90%'} height={'50px'} onClick={handleConfirmClick}>확인</ButtonBlue>
            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default OnboardingNickname;
