import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

// Styled Components
const StyledButton = styled(TouchableOpacity)`
  background-color: #7DB1FF;
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '40px'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

// ButtonBlue Component
const ButtonBlue = ({ children, width, height, onPress }) => {
    return (
        <StyledButton width={width} height={height} onPress={onPress} activeOpacity={0.7}>
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    );
};

export default ButtonBlue;
