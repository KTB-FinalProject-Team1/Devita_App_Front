import axios from 'axios';
import requestHandler from "./requestHandler";
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

const UpdateNutrition = async (todoId) => {

    try {
        const response = await axios.post(
            `${BASE_URL}/api/v1/character/use/nutrition`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        console.log("영양제 업데이트 성공",response.data);
        return response.data;
    } catch (error) {
        console.error("영양제 업데이트 실패:", error.message);
        throw error;
    }
};


const updateNutrition = async () => {
    return requestHandler({
        method: 'Post',
        data: {},
        endpoint: `/api/v1/character/use/nutrition`,
        successMessage: '영양제 업데이트 성공',
        errorMessage: '영양제 업데이트 실패',
    });
}

export default updateNutrition;

