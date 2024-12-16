import react from 'react';
import Header from '../Header/Header';
import TapBar from '../TapBar/TapBar';
import * as style from './style/MainLayout';


const MainLayout = ({children}) => {

    return(
        <style.Wrapper>
            <Header title={'Devita'} background ='#D6E6FF' />
            <style.Content>
                {children}
            </style.Content>
        </style.Wrapper>
    )
}

export default MainLayout;