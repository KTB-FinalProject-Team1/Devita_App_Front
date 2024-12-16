import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const postSetFreeMission = async (selectedMission) => {

    try {
        const response = await axios.post(
            `${BASE_URL}/api/v1/mission/free/save`,
            selectedMission,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        console.log("미션 리스트 추가하기 성공",response.data);
        return response.data;
    } catch (error) {
        console.error("미션 리스트 추가하기 실패:", error.message);
        throw error;
    }
};
