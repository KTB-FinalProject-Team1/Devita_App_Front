import requestHandler from "./requestHandler";

const postUnLike = async (postId) => {
    return requestHandler({
        method: 'POST',
        endpoint: `/api/v1/post/${postId}/unlike`,
        successMessage: '좋아요 취소 성공',
        errorMessage: '좋아요 취소 실패',
    });
}

export default postUnLike
