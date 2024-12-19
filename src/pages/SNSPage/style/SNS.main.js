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

export const TitleText = styled.Text`
    font-size: 28px;
    font-weight: bold;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 43px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #e9e9e9;
`

export const FeedWrapper = styled.ScrollView.attrs({

    horizontal: true,
    showsVerticalScrollIndicator: true,
    alignItems: "center",
    height: 110,
})
`
    height: 120px;



`;


export const StoryWrapper = styled.ScrollView.attrs({

    horizontal: false,
    showsVerticalScrollIndicator: true,
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200,
    },
})`
  

`;

export const TodoCategoryAddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #242424;
    justify-content: center;
    align-items: center;
`;
export const TodoCategoryAddButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color:white;
`

