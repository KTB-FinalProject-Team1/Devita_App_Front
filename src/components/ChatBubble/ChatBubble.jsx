import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

// Styled Components
const BubbleWrapper = styled.View`
  flex-direction: row;
  justify-content: ${(props) => (props.position === 'right' ? 'flex-end' : 'flex-start')};
  margin: 10px;
    background-color: blue;
`;

const Bubble = styled.View`
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: ${(props) => props.width || '60%'};
  position: relative; /* 부모 요소를 기준으로 삼각형 위치 지정 */
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;


const Triangle = styled.View`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-left-width: 10px;
  border-right-width: 10px;
  border-top-width: 10px;
  border-left-color: transparent;
  border-right-color:transparent;
  border-top-color: #f0f0f0;
  top: 230%; /* Bubble 아래쪽에 배치 */
  left: ${(props) => (props.position === 'right' ? 'auto' : '20px')};
  right: ${(props) => (props.position === 'right' ? '20px' : 'auto')};
`;

// ChatBubble Component
const ChatBubble = ({ children, position = 'left', width, height, direction, justify, align }) => {
    return (
        <BubbleWrapper position={position}>
            <Bubble position={position} width={width} height={height} direction={direction} justify={justify} align={align}>
               {children}
                <Triangle position={position}/>
            </Bubble>
        </BubbleWrapper>
    );
};

export default ChatBubble;
