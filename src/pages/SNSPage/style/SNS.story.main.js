import styled from "styled-components/native";


export const TotalMainContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;


`;

export const TotalWrapper = styled.View`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e9e9e9;
    
`;

export const MenuWrapper = styled.View`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e9e9e9;

`;

export const GoBackButton = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9e9e9;
    margin-left: 5px;
`;
export const GoBackImage = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 3px;
`
export const UserImageWrapper = styled.View`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;


`;
export const UserImage = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`
export const UserContentWrapper = styled.ScrollView.attrs({
    contentContainerStyle:{
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:100,
    }
})`
    width: 100%;
    height: 100%;
    


`;

export const UserNameWrapper = styled.View`
    width: 64%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;

`;
export const UserName = styled.Text`
    font-size: 17px;
    font-weight: 600;
`;

export const FollowButton = styled.TouchableOpacity`
    width: 70px;
    height: 40px;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
`;
export const FollowText = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: ${props => props.color};
`

export const UserTextWrapper = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;

`;
export const UserText = styled.Text`
    font-size: 15px;
    font-weight: 400;
`;
export const UserImagesContainer = styled.View`
    width: 100%;
    height: 210px;
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
