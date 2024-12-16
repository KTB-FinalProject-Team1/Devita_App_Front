import styled from 'styled-components/native';
import { Animated } from 'react-native';

/////// Animation //////
export const fadeInUp = {
    from: { opacity: 0, transform: [{ translateY: 20 }] },
    to: { opacity: 1, transform: [{ translateY: 0 }] },
};

export const scaleAnimation = {
    from: { transform: [{ scale: 1 }] },
    '25%': { transform: [{ scale: 1.2 }] },
    '50%': { transform: [{ scale: 1 }] },
    to: { transform: [{ scale: 1.2 }] },
};
////////////////////////

export const TotalWrapper = styled.View`
    width: 100%;
    height: 90%;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`;

export const SubAIWrapper = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: 'center', // 내부 컨텐츠를 가운데 정렬
        justifyContent: 'flex-start', // 위쪽부터 정렬
        flexGrow: 1,
        paddingBottom: 150,
    },
})`
  width: 100%;
    height: 90%;
  background-color: white;
  padding: 10px;
`;

export const ReloadButtonWrapper = styled.View`
width: 100%;
height: 65px;
  display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
    background-color: transparent;
`;
export const ReloadButton = styled.TouchableOpacity`
    width:45px;
    height:45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #e9e9e9;
    margin-right: 10px;
`;
export const ReloadImage = styled.Image`
    width: 25px;
    height: 25px;
`
export const TopCategoryWrapper = styled(Animated.View)`
  width: 90%;
  height: 150px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
export const ExplainWrapper = styled.View`
  height: 57px;
    min-width: 100px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border: 1px solid #f2f2f2;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  background-color: white;
    overflow: hidden;
`;
export const ExplainText = styled.Text`
    font-size: 16px;
    font-weight: 500;
`
export const TopCategorySelectScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', // 가로 방향 레이아웃
    },
})`
    width: 100%;
  height: 30px;
    background-color: #f2f2f2;
`;
export const TopCategorySelectInner = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`
export const TopCategoryButton = styled.TouchableOpacity`
  height: 52px;
    margin: 3px;
  border-radius: 12px;
    padding: 16px;
  flex-shrink: 0;
  font-size: 12px;
  background-color: ${(props) => (props.selected ? '#D6E6FF' : '#f2f2f2')};
  justify-content: center;
  align-items: center;
`;
export const TopCategorySelected = styled.TouchableOpacity`
  height: 52px;
    margin: 3px;
    padding: 16px;
  flex-shrink: 0;
  font-size: 12px;
  background-color: #7DB1FF;
  justify-content: center;
  align-items: center;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 12px;
`;

export const TopCategoryText = styled.Text`
    font-size: 16px;
    font-weight:500;
    color: black;
`;
export const TopCategorySelectedText = styled.Text`
    font-size: 16px;
    font-weight:500;
    color: white;
`

export const SubCategoryWrapper = styled(Animated.View)`
  width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const SubCategorySelectWrapper = styled.View`
  width: 100%;
    margin-top: 20px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
    flex-wrap: wrap;
`;

export const SubCategorySelectScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsVerticalScrollIndicator: false,
})`
  width: 270px;
  height: 90px;
  flex-wrap: wrap;
`;


export const SubCategoryButton = styled.TouchableOpacity`
  height: 50px;
    margin: 3px;
  border-radius: 12px;
    padding: 13px;
  flex-shrink: 0;
  font-size: 12px;
  background-color: ${(props) => (props.selected ? '#D6E6FF' : '#f2f2f2')};
  justify-content: center;
  align-items: center;
`;

export const GenerateButtonWrapper = styled.View`
  width: 90%;
  height: 55px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const GenerateButton = styled.TouchableOpacity`
  background-color: #7db1ff;
  height: 100%;
    max-width: 200px;
    padding: 16px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
    margin: 5px;
`;
export const GenerateButtonText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: white;
`

export const MissionWrapper = styled(Animated.View)`
  width: 90%;
    max-height: 450px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 30px;

`;

export const MissionSelectWrapper = styled.View`
    width: 100%;
    max-height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 1px solid #f2f2f2;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`;

export const MissionEachWrapper = styled.TouchableOpacity`
  width: 95%;
    min-height: 58px;
  border-radius: 10px;
  margin-top: 10px;
    padding: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-width: 1px;
  border-color: ${({ level, selected }) =>
    selected ? '#7DB1FF' : level === 1 ? '#EDEDED' : level === 2 ? '#D3D3D3' : '#A3A3A3'};
  background-color: ${({ level, selected }) =>
    selected ? '#D6E6FF' : level === 1 ? '#EDEDED' : level === 2 ? '#D3D3D3' : '#A3A3A3'};
`;

export const MissionEachText = styled.Text`
  font-size: 16px;
    font-weight:500;
`;

export const MissionSelectButtonWrapper = styled.View`
  width: 50%;
    height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

export const MissionRegenerateButton = styled.TouchableOpacity`
  height: 56px;
  border-radius: 12px;
  margin-right: 10px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

export const LoadingWrapper = styled.View`
  width: 90%;
  height: 45%;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const LoadingImg = styled.Image`
  width: 25%;
  height: 35%;
`;
