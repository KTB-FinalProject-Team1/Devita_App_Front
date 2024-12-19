import requestHandler from "./requestHandler";


const deleteLike = async (postId) => {
    return requestHandler({
        method: 'DELETE',
        endpoint: `/api/v1/post/${postId}`,
        successMessage: '좋아요 취소 성공',
        errorMessage: '좋아요 취소 실패',
    });
};

export default deleteLike;

