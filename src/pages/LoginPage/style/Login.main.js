import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex:1;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    

`;

export const TitleWrapper = styled.View`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
`;

export const Logo = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-top:20px;
    color: black;
`;

export const KakaoLoginWrapper = styled.TouchableOpacity`
    width: 90%;
    height:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FAE100;
    border-radius: 10px;
    margin-top: 300px;
    border: none;
    
    &:hover {
        background: gold;
    }
    
`;

export const KakaoLogo = styled.Image`
    width: 42px;
    height: 40px;
`;

export const KakaoLoginText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #371D1E;
    margin-left: 10px;
`;

