import Amplify from 'aws-amplify';
import { REGION, BUCKET_NAME, ACCESS_KEY, SECRET_KEY } from '@env';

Amplify.configure({
    Auth: {
        identityPoolId: 'YOUR_COGNITO_IDENTITY_POOL_ID', // Cognito Identity Pool ID
        region: REGION, // e.g., 'ap-northeast-2'
    },
    Storage: {
        AWSS3: {
            bucket: BUCKET_NAME, // S3 버킷 이름
            region: REGION, // e.g., 'ap-northeast-2'
        },
    },
});
