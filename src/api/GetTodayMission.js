import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const getTodayMission = async () => {

    try {
        const response = await axios.get(
            `${BASE_URL}/api/v1/mission/daily`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                withCredentials: true,
                timeout: 30000
            }
        );
        return response.data.data;
    } catch (error) {
        console.error("일일 미션 호출 실패:", error.message);
        throw error;
    }
};
