import requestHandler from './requestHandler'

const getFriendPost = async () => {
    return requestHandler({
        method: 'GET',
        endpoint: `/api/v1/feed`,
        successMessage: '친구 포스트 불러오기 성공',
        errorMessage: '친구 포스트 불러오기 실패',
    });
};

export default getFriendPost;
