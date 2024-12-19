import axios from 'axios';
import requestHandler from "./requestHandler";

const postFeed = async (storyData) => {
    return requestHandler({
        method: 'POST',
        data: storyData,
        endpoint: `/api/v1/post`,
        successMessage: '게시물 보내기 성공',
        errorMessage: '게시물 보내기 실패',
    });
}

export default postFeed
