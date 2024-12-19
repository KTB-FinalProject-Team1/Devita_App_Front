import axios from 'axios';
import requestHandler from "./requestHandler";

const postFollow = async (targetId) => {
    return requestHandler({
        method: 'POST',
        endpoint: `/api/v1/follows/${targetId}`,
        successMessage: '팔로우 성공',
        errorMessage: '팔로우 실패',
    });
}

export default postFollow
