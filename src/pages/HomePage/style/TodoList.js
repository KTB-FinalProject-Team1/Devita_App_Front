import styled, { css, keyframes } from "styled-components/native";

export const TotalWrapper = styled.View`
    width: 90%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 30px;

`;

export const TitleWrapper = styled.View`
    width: 85%;
    height: 10%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const DateWrapper = styled.View`
    width: 85%;
    height: 5%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5px;
`;

export const Date = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const MissionTotalWrapper = styled.View`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const CategoryWrapper = styled.View`
    width: 100%;
    border-radius: 12px;
    border: 1.5px solid ${props => props.color || '#000'}; // 기본값: #000
    background-color: ${props => {
    const hexToRgba = (hex, alpha) => {
        if (!hex || hex.length !== 7) return `rgba(0, 0, 0, ${alpha})`; // 안전한 기본값
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    return props.color ? hexToRgba(props.color, 0.1) : 'rgba(0, 0, 0, 0.1)';
}};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 15px;
    margin-bottom: 15px;
`;
export const CategoryTitleWrapper = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


`;
export const TodoListAddButton = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
`;

export const TodoListAddButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`

export const CategoryTitle = styled.Text`
    font-size: 18px;   
    font-weight: bold;
    
`;

export const MissionFrame = styled.ScrollView`
    width: 100%;
`;

// 애니메이션 키프레임을 RN에 맞게 구현할 필요가 있음
const borderFadeAnimation = (color) => keyframes`
  0% { border-color: ${color}00; }
  50% { border-color: ${color}FF; }
  100% { border-color: ${color}00; }
`;

export const MissionWrapper = styled.View`
    width: 95%;
    height: 50px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  
`;
export const MissionTextWrapper = styled.View`
    width:  266px;
    margin-left: 5px;
`
export const MissionText = styled.Text`


    font-size: 15px;
    margin-left: 10px;
    text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

export const MissionCheckWrapper = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 10px; /* 원형 */
    border-width: 2px;
    border-color: ${(props) => props.isChecked ? props.color : '#aaa'}; /* 선택 여부에 따른 색상 */
    background-color: ${(props) => props.isChecked ? props.color || '#000' : 'transparent'}; /* 체크된 상태일 때 배경 색상 */
    align-items: center;
    justify-content: center;
`;

export const MissionEditButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #D3D3D3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#EEEEEE;
`;

export const MissionEditButtonText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color:darkgray;
    margin-bottom: 5px;
`;
export const InputWrapper = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 7px;

`;
export const InputTodoWrapper = styled.TextInput`
    width: 75%;
    height: 95%;
    margin-left: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.color};
    padding: 3px;

`;
export const AddButton = styled.TouchableOpacity`
    width: 50px;
    height: 95%;
    border-radius: 5px;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: gray;
`
