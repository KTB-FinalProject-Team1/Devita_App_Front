import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
import requestHandler from "./requestHandler";

const DeleteTodo = async (todoId) => {

    try {
        const response = await axios.delete(
            `${BASE_URL}/api/v1/todo/${todoId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        return response.data;
    } catch (error) {
        console.error("투두리스트 삭제 실패:", error.message);
        throw error;
    }
};


const deleteTodo = async (todoId) => {
    return requestHandler({
        method: 'DELETE',
        endpoint: `/api/v1/todo/${todoId}`,
        successMessage: '할 일 삭제 성공',
        errorMessage: '할 일 삭제 실패',
    });
};

export default deleteTodo;



