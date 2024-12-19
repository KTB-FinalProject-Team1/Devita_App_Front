import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
import requestHandler from "./requestHandler";



const deleteCategory = async (todoId) => {
    return requestHandler({
        method: 'DELETE',
        endpoint: `/api/v1/todo/${todoId}`,
        successMessage: '할 일 삭제 성공',
        errorMessage: '할 일 삭제 실패',
    });
};

export default deleteCategory;



