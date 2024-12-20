import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import requestHandler from "./requestHandler";

const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const UpdateTodo = async (todoId) => {
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

const updateTodo = async (todoId) => {
    console.log('api 호출',todoId);
    return requestHandler({
        method: 'PUT',
        data: {},
        endpoint: `/api/v1/todo/${todoId}/toggle`,
        successMessage: 'todo 업데이트 성공',
        errorMessage: 'todo 업데이트 실패',
    });
}

export default updateTodo;
