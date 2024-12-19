import styled from "styled-components/native";

export const TotalWrapper = styled.View`   
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`;


export const TitleWrapper = styled.View`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`;

export const MenuWrapper = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e9e9e9;

`;

export const GoBackButton = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9e9e9;
    margin-left: 5px;
`;
export const GoBackImage = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 3px;
`
