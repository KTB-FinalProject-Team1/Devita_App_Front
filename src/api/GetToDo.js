import axios from 'axios';
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

export const getTodo = async (viewType) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/todo/calendar?viewType=${viewType}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
            },
            withCredentials: true,
            timeout: 60000
        });
        console.error("todolist 불러오기  성공", response.data);
        return response.data.data;

    } catch (error) {
        console.error("todolist 불러오기  실패", error.message);

        throw error;
    }
};
