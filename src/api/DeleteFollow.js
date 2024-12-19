import requestHandler from "./requestHandler";


const deleteCategory = async (todoId) => {
    return requestHandler({
        method: 'DELETE',
        endpoint: `/api/v1/follows/${todoId}`,
        successMessage: '팔로우 취소 성공',
        errorMessage: '팔로우 취소 실패',
    });
};

export default deleteCategory;

