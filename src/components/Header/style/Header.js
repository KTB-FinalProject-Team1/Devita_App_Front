import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Layout = styled.View`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "transparent"};
  position: absolute;
  top: 0;
`;

export const Logo = styled.View`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: #9e9e9e;
  font-weight: 700;
  font-size: 25px;
`;

export const LoginButton = styled.TouchableOpacity`
  border: none;
  margin-right: 20px;
  background-color: transparent;
`;

export const LoginButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  margin-right: 20px;
`;

export const LoginButtonName = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
`;

export const BackIcon = styled(Icon).attrs({
    name: "angle-left",
})`
  position: absolute;
  left: 10px;
  font-size: 25px;
  color: black;
`;
