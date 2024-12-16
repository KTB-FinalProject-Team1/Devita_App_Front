import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const settingStack = async (selectedCategories) => {

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
