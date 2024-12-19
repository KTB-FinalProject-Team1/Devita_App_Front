import axios from 'axios';
import requestHandler from "./requestHandler";
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

const GetTodayMission = async () => {

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

const getTodayMissionData = async () => {
    return requestHandler({
        method: 'GET',
        endpoint: `/api/v1/mission/daily`,
        successMessage:'일일 미션 호출 성공',
        errorMessage: '일일 미션 호출 실패'
    })
}

export default getTodayMissionData;
