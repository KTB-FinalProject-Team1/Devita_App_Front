import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

export const instance = axios.create({
    baseURL: BASE_URL, // baseURL을 소문자로 작성해야 함
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 60000,
});

// Request Interceptor
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
            console.warn('Authorization token is missing');
            throw new axios.Cancel('No Authorization token found');
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response;
        }
        return response;
    },
    (error) => {
        if (error.code === 'ECONNABORTED') {
            console.log('Request timeout');
            // Timeout 처리 로직
        }
        if (error.response?.status === 401) {
            console.warn('Authentication failed. Redirecting to login.');
            // 로그인 페이지로 리다이렉트
        }
        return Promise.reject(error);
    }
);
