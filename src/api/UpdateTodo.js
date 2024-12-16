import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const updateTodo = async (todoId) => {
    try {
        // AsyncStorage에서 accessToken 가져오기
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (!accessToken) {
        }

        const response = await axios.put(
            `${BASE_URL}/api/v1/todo/${todoId}/toggle`,
            {}, // PUT 요청의 body
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
                timeout: 20000,
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
    }
};
