import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
import requestHandler from "./requestHandler";

const AddTodo = async (categoryId = 0, title, date) => {
    const todoData = { categoryId, title, date };

    console.log("전송할 데이터:", todoData); // 데이터 확인용 콘솔 출력

    try {
        const response = await axios.post(
            `${BASE_URL}/api/v1/todo`,
            todoData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        return response.data;
    } catch (error) {
        console.error("투두리스트 추가 실패:", error.message);
        throw error;
    }
};
const addTodo = async (categoryId = 0, title, date) => {
    const todoData = { categoryId, title, date };
    return requestHandler({
        method: 'POST',
        endpoint: '/api/v1/todo',
        data: todoData,
        successMessage: '투두리스트 추가 성공',
        errorMessage: '투두리스트 추가 실패'
    });
};

export default addTodo;

