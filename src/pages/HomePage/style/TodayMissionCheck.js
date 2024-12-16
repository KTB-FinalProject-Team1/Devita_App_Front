import styled from "styled-components/native";

export const TotalWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #D6E6FF;
`;

export const LoadingImgWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const LoadingImg = styled.Image`
  width: 300px;
  height: 250px;
`;

export const MissionWrapper = styled.View`
  width: 80%;
  padding: 10px;
  height: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  elevation: 5; /* Android용 그림자 */
`;

export const MissionTextTitle = styled.Text`
  width: 85%;
  font-size: 17px;
  font-weight: bold;
`;

export const MissionText = styled.Text`
  width: 80%;
  padding: 10px;
  font-size: 15px;
  background-color: #D6E6FF;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
`;
