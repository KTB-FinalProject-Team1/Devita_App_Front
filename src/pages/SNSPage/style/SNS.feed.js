import styled from "styled-components/native";

export const TotalButtonContainer = styled.TouchableOpacity`
    width: 305px;
    height: 80px;
    margin: 5px;
`;
export const TotalContainer = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
`;

export const UserImageWrapper = styled.View`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid #7DB1FF;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ContentWrapper = styled.View`
    width: 210px;
    height: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;

`;
export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;
export const UserContent = styled.Text`
    font-size: 14px;
    font-weight: 500;
`
