import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs'; // 파일 읽기
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { REGION, BUCKET_NAME, ACCESS_KEY, SECRET_KEY } from '@env';

const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
    },
});

const uploadToS3 = async (fileUri) => {
    try {
        // RNFS를 사용해 파일을 Base64로 읽기
        const fileContent = await RNFS.readFile(fileUri, 'base64');
        const buffer = Buffer.from(fileContent, 'base64'); // Base64를 Buffer로 변환

        const fileName = `uploads/${uuidv4()}.jpg`;

        const params = {
            Bucket: BUCKET_NAME,
            Key: fileName,
            Body: buffer,
            ContentType: 'image/jpeg',
            //ACL: 'public-read',
        };

        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        return `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`;
    } catch (error) {
        console.error('S3 업로드 실패:', error);
        throw error;
    }
};

const ImageUploader = ({onImageSelect}) => {
    const [image, setImage] = useState(null);

    const handleUpload = async () => {
        try {
            const result = await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
            });

            setImage(result.path);

            const uploadedUrl = await uploadToS3(result.path);
            console.log('업로드된 이미지 URL:', uploadedUrl);
            onImageSelect(uploadedUrl);
            Alert.alert('성공', '이미지가 성공적으로 업로드되었습니다.');
        } catch (error) {
            console.error('이미지 업로드 오류:', error);
            Alert.alert('실패', '이미지를 업로드하지 못했습니다.');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="이미지 업로드" onPress={handleUpload} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
});

export default ImageUploader;
