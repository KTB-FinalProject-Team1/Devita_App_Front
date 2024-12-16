import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const SecondCharacterAnimation = () => {
    const frames = [
        require('../../assets/img/worker11.png'),
        require('../../assets/img/worker22.png'),
        require('../../assets/img/worker33.png'),
        require('../../assets/img/worker44.png'),
        require('../../assets/img/worker33.png'),
    ];

    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
        }, 250);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={frames[currentFrame]} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 210,
        height: 240,
        resizeMode: 'contain',
    },
});

export default SecondCharacterAnimation;
