import styled from 'styled-components/native';

export const OverLay = styled.View`
    position: absolute;
    top: -500px;
    bottom:0;
    width: 400px;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;
export const CategoryOverLay = styled.View`
    position: absolute;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

export const ModalWrapper = styled.View`
    width: 100%;
    min-height: 450px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    align-items: center;
    position: absolute;
    bottom: 0;
`;
export const ModalCategoryWrapper = styled.View`
    width: 100%;
    height: 500px;
    background-color: white;
    padding: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
`;

export const TopButtonWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;
export const CategoryChangeButton = styled.TouchableOpacity``

export const ExitButton = styled.TouchableOpacity`
    padding: 10px;
`;

export const ExitButtonText = styled.Text`
    color:black;
    font-size: 20px;
    font-weight: 500;
`;

export const InputWrapper = styled.View`
    margin-top: 10px;
    width: 90%;

`;
export const InputTodoWrapper = styled.View`
    margin-top: 10px;
    width: 90%;
    margin-bottom: 110px;

`;
export const Input = styled.TextInput`
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 16px;

`;
