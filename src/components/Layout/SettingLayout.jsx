import react from 'react';
import Header from '../Header/Header';
import TapBar from '../TapBar/TapBar';
import * as style from './style/MainLayout';


const SettingLayout = ({children}) => {

    return(
        <style.Wrapper>
            <Header isBack={true}/>
            <style.Content>
                {children}
            </style.Content>
        </style.Wrapper>
    )
}

export default SettingLayout;