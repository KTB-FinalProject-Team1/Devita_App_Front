import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  overflow: hidden; /* React Native에서는 overflow-y를 직접 지원하지 않음 */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box; /* React Native에서는 필요 없음 */
`;
