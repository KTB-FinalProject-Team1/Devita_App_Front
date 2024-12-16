import axios from 'axios';

export const getFreeMission = async (subCategory) => {

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/v1/mission/free`,
            {subCategory},
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
        console.error("자율 미션 호출 실패:", error.message);
        throw error;
    }
};