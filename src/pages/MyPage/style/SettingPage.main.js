import styled from "styled-components/native";

export const TotalWrapper = styled.View`
  flex: 1;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  width: 95%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ChangeWrapper = styled.View`
  width: 100%;
  height: 5%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #b0b0b0;
  padding: 10px;
  margin-top: 15px;
`;

export const ChangeTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ChangeMoveButton = styled.Text``;
