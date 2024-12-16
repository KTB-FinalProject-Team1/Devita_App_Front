import React, {useState} from 'react';
import * as style from '../OnboardingPage/style/Onboarding.main';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import {useNavigate} from "react-router-dom";


function SettingNickName(){
    const [nickname, setNickname] = useState('')
    const navigate = useNavigate();
    const handleConfirmClick = ()=>{
        alert('닉네임이 변경되었습니다!');
        navigate(-1);
    }
    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.NickNameWrapper>
                    <style.NickNameTitle>닉네임</style.NickNameTitle>
                    <style.NickNameInputWrapper>
                        <style.NickNameInput
                            type='text'
                            placeholder="변경할 닉네임을 입력해 주세요"
                        />
                    </style.NickNameInputWrapper>
                </style.NickNameWrapper>
                <ButtonBlue width={'90%'} height={'50px'} onClick={handleConfirmClick}>확인</ButtonBlue>
            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default SettingNickName;