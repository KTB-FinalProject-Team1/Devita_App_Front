import styled from "styled-components/native";


export const TotalStoryContainer = styled.View`
    width: 100%;
    max-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;

`;


export const TotalContainer = styled.View`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e9e9e9;
    
`;
export const UserImageWrapper = styled.View`
    height: 100%;
    width: 50px;
    display: flex;
    align-items: flex-start;
    margin-top: 5px;

`;
export const UserImage = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`
export const UserContentWrapper = styled.View`
    height: 100%;
    width: 305px;
    
`;
export const UserContentRealWrapper = styled.View`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const UserNameWrapper = styled.View`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
`;
export const UserName = styled.Text`
    font-size: 15px;
    font-weight: 600;
`;

export const UserTextButton = styled.TouchableOpacity`
    
`

export const UserTextWrapper = styled.ScrollView.attrs({
    horizontal: false,
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})`
    width: 100%;
    margin-top: 5px;
`;

export const UserText = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;
export const UserImagesContainer = styled.View`
    width: 100%;
    height: 180px;
    margin-top: 10px;
`
export const UserImagesWrapper = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})`
    height: 100%;
`;
export const UserLikeWrapper = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;       
`;

export const UserLike = styled.TouchableOpacity`
    width: 75px;
    height: 90%;
    border-radius: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
`;


export const UserLikeText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.color} ;
    margin-left: 5px;
`
