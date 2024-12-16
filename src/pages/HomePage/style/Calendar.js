import styled from 'styled-components/native';

// 전체 달력 컨테이너
export const TotalWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

// 날짜 이동 버튼이 들어갈 상단 영역
export const DateMoveWrapper = styled.View`
  display: flex;
    flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const DateMoveText = styled.Text`
    font-size: 20px;
`

// 월과 연도 텍스트
export const MonthYearText = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #333;
`;

// 좌우 내비게이션 버튼
export const NavigationButton = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: blue;
  padding: 5px;
    margin: 5px;
`;

// 요일 컨테이너
export const WeekWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
`;

// 요일 및 날짜 컨테이너
export const EachDateWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: center;
  margin: 0 5px;
    width: 42px;
    height: 62px;
    border-radius: 5px;
    background-color: ${(props) =>
            props.isToday
                    ? '#7DB1FF'
                    : props.isSelected
                            ? 'black'
                            : '#F7F7F7'};
`;

// 요일 스타일
export const EachDayofWeek = styled.Text`
  font-size: 14px;
  font-weight: 500;
    color: ${(props) =>
            props.isToday || props.isSelected ? 'white' : '#000000'};
`;



// 날짜 텍스트 스타일
export const EachDayText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) =>
            props.isToday || props.isSelected ? 'white' : '#000000'};
    
`;
