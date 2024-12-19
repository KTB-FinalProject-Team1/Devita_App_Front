import styled from "styled-components/native";

export const TotalWrapper = styled.View`
    flex: 1;
    width: 100%;
    padding: 25px;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.ScrollView`
    flex: 1;
    width: 95%;
`;

export const TitleWrapper = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 70px;
`;

export const TitleWrapperStack = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 60px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const NickNameWrapper = styled.View`
    width: 90%;
    height: 20%;
    align-items: flex-start;
    justify-content: center;
`;

export const NickNameTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const NickNameInputWrapper = styled.View`
    width: 100%;
    height: 40px;
    border-bottom-width: 2px;
    border-color: #B0B0B0;
    justify-content: flex-end;
    margin-top: 5px;
    margin-bottom: 30px;
`;

export const NickNameInput = styled.TextInput`
    width: 100%;
    height: 80%;
    font-weight: bold;
    color: black;
`;

export const StackTotalWrapper = styled.View`
    width: 90%;
    margin-bottom: 30px;
`;

export const StackWrapper = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const StackMainCategory = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const StackSubCategoryWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const SubCategoryButton = styled.TouchableOpacity`
    height: 35px;
    min-width: 40px;
    margin: 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props) => (props.isSelected ? "#D6E6FF" : "#DEDEDE")};
    justify-content: center;
    align-items: center;
`;

export const SubCategoryButtonText = styled.Text`
    font-size: 15px;
    color: ${(props) => (props.isSelected ? "gray" : "black")};
`;

export const MarginDiv = styled.View`
    height: 100px;
`;
