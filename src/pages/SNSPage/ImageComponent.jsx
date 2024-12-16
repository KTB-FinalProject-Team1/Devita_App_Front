import React, { useState } from 'react';
import styled from 'styled-components/native';

export const UserImgContainer = styled.View`
    height: ${(props) => props.height}px; /* 고정된 높이 */
    margin: 5px;
`;

export const UserImg = styled.Image`
    height: 100%; /* 부모의 높이를 채움 */
    width: ${(props) => props.width}px; 
    border-radius: 5px;
`;

const ImageComponent = ({ source, height=170 }) => {
    const [imageWidth, setImageWidth] = useState(0);

    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const aspectRatio = width / height;

        // 고정된 height에 따라 width 계산
        setImageWidth(170 * aspectRatio);
    };

    return (
        <UserImgContainer height={height}>
            <UserImg
                source={source}
                width={imageWidth}
                onLoad={handleImageLoad}
            />
        </UserImgContainer>
    );
};

export default ImageComponent;
