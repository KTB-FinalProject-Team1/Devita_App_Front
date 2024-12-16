import styled from "styled-components/native";

export const TotalWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px;
    background-color: white;
`;

export const Wrapper = styled.View`

  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const UserNameWrapper = styled.View`
  width: 100%;
    height: 70px;
    display: flex;
  flex-direction: row;
    align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-left: 10px;
`;


export const CharacterTotalWrapper = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const CharacterDevelopWrapper = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F7;
`;

export const CharacterLevelWrapper = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharacterLevelTitleWrapper = styled.View`
  width: 85%;
  height: 25px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;
export const CharacterLevel = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;
export const CharacterName = styled.Text`
    font-size: 16px;
    font-weight: 500; 
    margin-left: 10px;
    color:gray;
`;

export const CharacterNameWrapper = styled.View`
    width: 203px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const Percent = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7db1ff;
`;

export const CharacterLevelBar = styled.View`
  width: 87%;
  height: 35%;
  border-radius: 30px;
  margin-top: 20px;
  background-color: #cecece;
  position: relative;
`;

export const CharacterLevelBarInner = styled.View`
  width: ${(props) => props.dealt + "%"};
  height: 100%;
  position: absolute;
  border-radius: 30px;
  background-color: #7db1ff;
`;

export const CharacterButtonWrapper = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CharacterButton = styled.TouchableOpacity`
  width: 85%;
  height: 88%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  background-color: #DEDEDE;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 4 };
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;

  &:hover {
    width: 83%;
    height: 93%;
    background-color: #d6e6ff;
  }
`;

export const CharacterButtonTextWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
   
`;

export const CharacterButtonImage = styled.Image`
  width: 45px;
  height: 45px;
  margin-left: 60px;
`;

export const CharacterButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CharacterButtonSubTitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;
