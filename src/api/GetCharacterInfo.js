import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
import requestHandler from "./requestHandler";


const GetCharacterInfo = async () => {

    try {
        const response = await axios.get(
            `${BASE_URL}/api/v1/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                timeout: 20000
            }
        );
        console.log('제일 처음 fetch',response);
        return response.data.data;
    } catch (error) {
        console.error("사용자 캐릭터 정보 호출 실패:", error.message);
        throw error;
    }
};

const getCharacterInfo = async () => {
    return requestHandler({
        method: 'GET',
        endpoint: `/api/v1/users/me`,
        successMessage: '캐릭터 정보 성공',
        errorMessage: '캐릭터 정보 실패',
    });
};

export default getCharacterInfo;

