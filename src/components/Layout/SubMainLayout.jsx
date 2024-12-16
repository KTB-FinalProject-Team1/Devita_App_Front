import react from 'react';
import Header from '../Header/Header';
import TapBar from '../TapBar/TapBar';
import * as style from './style/MainLayout';


const SubLayout = ({children}) => {

    return(
        <style.Wrapper>
            <style.Content>
                {children}
            </style.Content>
            <TapBar />
        </style.Wrapper>
    )
}

export default SubLayout;