import requestHandler from './requestHandler'

const GetPosts = async () => {
    return requestHandler({
        method: 'GET',
        endpoint: `/api/v1/posts/all`,
        successMessage: 'Post 불러오기 성공',
        errorMessage: 'Post 불러오기 실패',
    });
};

export default GetPosts;
