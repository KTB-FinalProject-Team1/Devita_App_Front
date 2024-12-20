import requestHandler from "./requestHandler";


const deletePost = async (postId) => {
    return requestHandler({
        method: 'DELETE',
        endpoint: `/api/v1/post/${postId}`,
        successMessage: 'Post 삭제 취소 성공',
        errorMessage: 'Post 삭제 취소 실패',
    });
};

export default deletePost;

