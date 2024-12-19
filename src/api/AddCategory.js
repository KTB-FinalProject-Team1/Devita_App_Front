import { instance } from "./instance";
import requestHandler from "./requestHandler";

const AddCategory = async (name, color) => {

    try {
        const response = await instance.post('/api/v1/todo/category', {
            name,
            color
        });
        return response.data;

    } catch (error) {
        console.error("투두 카테고리 추가 실패", error.message);
        throw error;
    }
};


const addCategory = async (name, color) => {
    const requestData = {
        name,
        color,
    }
    return requestHandler({
        method: 'POST',
        endpoint: '/api/v1/todo/category',
        data: requestData,
        successMessage: '투두 카테고리 추가 성공',
        errorMessage: '투두카테고리 추가 실패'
    });
};



export default addCategory;

