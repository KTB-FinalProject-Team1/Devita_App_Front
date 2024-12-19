import requestHandler from "./requestHandler";

const postLike = async (postId) => {
    return requestHandler({
        method: 'POST',
        endpoint: `/api/v1/post/${postId}/like`,
        successMessage: '좋아요 성공',
        errorMessage: '좋아요 실패',
    });
}

export default postLike
