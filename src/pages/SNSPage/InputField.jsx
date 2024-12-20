import React from 'react';
import { MentionInput } from 'react-native-controlled-mentions';
import styled from 'styled-components/native';

const StyledInputContainer = styled.View`
  width: 100%;
  min-height: 100px;
  background-color: white;
`;

const InputField = ({ value, onChangeText, placeholder, multiline = true, autoFocus = false }) => {
    return (
        <StyledInputContainer>
            <MentionInput
                value={value}
                onChange={onChangeText}
                placeholder={placeholder}
                multiline={multiline}
                autoFocus={autoFocus}
                numberOfLines={5}
                style={{
                    flex: 1,
                    padding: 10,
                    fontSize: 16,
                    color: '#333',
                    textAlignVertical: 'top',
                }}
                containerStyle={{
                    flex: 1,
                }}
                autoCorrect={false}
                autoCapitalize="none"
            />
        </StyledInputContainer>
    );
};

export default InputField;
