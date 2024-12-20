import axios from 'axios';
import requestHandler from "./requestHandler";
import { BASE_URL } from '@env';

const SettingStack = async (selectedCategories) => {

    try {
        const response = await axios.put(
            `${BASE_URL}/api/v1/users/me/preferred-categories`,
            {categories: selectedCategories},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                timeout: 20000
            }
        );
        return response.data;
    } catch (error) {
        console.error("스택 설정 실패:", error.message);
        throw error;
    }
};

const settingStack = async (selectedCategories) => {
    return requestHandler({
        method: 'PUT',
        data: { categories: selectedCategories },
        endpoint: `/api/v1/users/me/preferred-categories`,
        successMessage: '스택 설정 성공',
        errorMessage: '스택 설정 실패',
    });
}

export default settingStack
