import styled from "styled-components/native";

// 전체 화면 래퍼
export const Wrapper = styled.View`
    flex: 1;
    background-color: white;
    position: relative;
`;

// 고정된 상단 래퍼
export const CalendarWrapper = styled.View`
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    elevation: 5; /* 그림자 효과 (선택 사항) */
    z-index: 1; /* 상단 고정 */
    background-color: white;
`;

// 스크롤 가능 영역
export const ScrollableWrapper = styled.ScrollView.attrs({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})`
    flex: 1;
    width: 100%;
    padding: 120px 0;
`;
export const TodayMissionWrapper = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-color: #f0f0f0;
`
export const TodoListWrapper = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
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

